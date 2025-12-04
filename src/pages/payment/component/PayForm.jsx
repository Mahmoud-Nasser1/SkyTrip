import React, { useContext, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Alert,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import StepperWithContent from "../../booking/components/StepperWithContent";
import Swal from "sweetalert2";
import { useUser } from "../../../context/UserContext";
import { BookingContext } from "../../../context/BookingContext";
import { usePassenger } from "../../../context/UsePassenger";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

const PayForm = () => {
  const { user } = useUser();
  const { countries } = useCountries();
  const [type, setType] = useState("card");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [error, setError] = useState("");
  const [cardData, setCardData] = useState({
    userEmail: user.email,
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [paypalData, setPayPalData] = useState({
    userEmail: user.email,
    country: "",
    postalCode: "",
  });
  const { addBooking } = useContext(BookingContext);
  const {
    passenger: { firstName, lastName, phoneNumber, passportNumber },
    flightId,
  } = usePassenger();
  const formData = {
    firstName,
    lastName,
    phoneNumber,
    passportNumber,
    flightIds: [flightId],
    numberOfPassengers: 1,
  };

  const handleBook = async () => {
    const result = await addBooking(formData);

    if (!result.error) {
      console.log("Booking Done:", result);
    }
  };

  const theme = localStorage.getItem("theme") || "light";

  const payNow = () => {
    const { userEmail, cardholderName, cardNumber, expirationDate, cvv } =
      cardData;

    if (
      !userEmail.trim() ||
      !cardholderName.trim() ||
      !cardNumber.trim() ||
      !expirationDate.trim() ||
      !cvv.trim()
    ) {
      return setError("Please fill in all fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return setError("Please enter a valid email address");
    }

    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber.replace(/\s/g, ""))) {
      return setError("Card number must be 16 digits");
    }

    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      return setError("CVV must be 3 digits");
    }

    const expRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expRegex.test(expirationDate)) {
      return setError("Expiration date must be MM/YY");
    }

    const nameRegex = /^[A-Za-z\s]{3,40}$/;
    if (!nameRegex.test(cardholderName)) {
      return setError("Cardholder name must contain only letters");
    }

    setError("");

    Swal.fire({
      title: "Confirm Payment?",
      text: "Are you sure you want to proceed with the payment?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Pay Now",
      cancelButtonText: "Cancel",

      reverseButtons: true,
      focusConfirm: false,
      focusCancel: false,
      returnFocus: false,

      confirmButtonColor: "#10B981",
      cancelButtonColor: "#F43F5E",

      color: theme === "dark" ? "#fff" : "#333",

      background:
        theme === "dark"
          ? "linear-gradient(to right, #1E2A47, #2B2C4E, #3C2F2F)"
          : "linear-gradient(to right, #EFF6FF, #FFE8D6)",

      backdrop: `
      rgba(0,0,0,0.45)
      blur(6px)
  `,

      customClass: {
        popup: "rounded-3xl",
        confirmButton: "rounded-full px-6 py-2",
        cancelButton: "rounded-full px-6 py-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setOpen(true);
        handleBook();

        setCardData({
          userEmail: "",
          cardholderName: "",
          cardNumber: "",
          expirationDate: "",
          cvv: "",
        });
      }
    });
  };

  const paypalPayNow = () => {
    const { userEmail, country, postalCode } = paypalData;

    if (!userEmail.trim() || !country || !postalCode.trim()) {
      return setError("Please fill in all fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return setError("Please enter a valid email address");
    }

    const postalRegex = /^\d{4,10}$/;
    if (!postalRegex.test(postalCode)) {
      return setError("Postal code must contain 4–10 digits");
    }

    setError("");

    Swal.fire({
      title: "Confirm PayPal Payment?",
      text: "Do you want to complete this payment via PayPal?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Pay Now",
      cancelButtonText: "Cancel",

      reverseButtons: true,
      focusConfirm: false,
      focusCancel: false,
      returnFocus: false,

      confirmButtonColor: "#10B981",
      cancelButtonColor: "#F43F5E",

      color: theme === "dark" ? "#fff" : "#333",

      background:
        theme === "dark"
          ? "linear-gradient(to right, #1E2A47, #2B2C4E, #3C2F2F)"
          : "linear-gradient(to right, #EFF6FF, #FFE8D6)",

      backdrop: `
      rgba(0,0,0,0.45)
      blur(6px)
    `,

      customClass: {
        popup: "rounded-3xl",
        confirmButton: "rounded-full px-6 py-2",
        cancelButton: "rounded-full px-6 py-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setOpen(true);
        handleBook();

        setPayPalData({
          userEmail: "",
          country: "",
          postalCode: "",
        });
      }
    });
  };

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goUserTrips = () => {
    navigate("/profile/trips");
  };
  return (
    <div className="md:w-3/5 md:container md:mx-auto mx-0 w-full p-10 gap-6 flex flex-col py-24 dark:bg-dark-background dark:text-dark-primary">
      <div
        className="flex justify-center backdrop-blur-xl bg-white/80  rounded-3xl p-4 md:p-9 shadow-lg border border-white/40 hover:shadow-2xl hover:shadow-gradient-violet/30 dark:bg-dark-card 
             hover:scale-[1] hover:border-gradient-violet duration-500  dark:border-white/10"
      >
        <StepperWithContent numPage={2} />
      </div>
      <Card className=" w-full transform transition-all duration-500  hover:shadow-2xl hover:shadow-gradient-violet hover:border-gradient-violet dark:bg-dark-card dark:text-dark-primary">
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center bg-gradient-main px-4 py-8 text-center"
        >
          <div className="mb-4 h-20 p-6 text-white">
            {type === "card" ? (
              <CreditCardIcon className="h-10 w-10 text-white" />
            ) : (
              <img
                alt="paypal"
                className="w-14"
                src="https://docs.material-tailwind.com/icons/paypall.png"
              />
            )}
          </div>
          <Typography variant="h5" color="white">
            Sky Trip Payment
          </Typography>
        </CardHeader>

        <CardBody className="dark:text-dark-primary">
          <Tabs
            value={type}
            className="overflow-visible dark:text-dark-primary"
          >
            <TabsHeader
              className="relative z-0 dark:bg-dark-secondary dark:text-dark-primary"
              indicatorProps={{
                className: "dark:bg-dark-card",
              }}
            >
              <Tab
                value="card"
                onClick={() => setType("card")}
                className=" dark:text-dark-primary"
              >
                Pay with Card
              </Tab>
              <Tab
                value="paypal"
                onClick={() => setType("paypal")}
                className=" dark:text-dark-primary"
              >
                Pay with PayPal
              </Tab>
            </TabsHeader>

            <TabsBody
              className="!overflow-x-hidden !overflow-y-hidden"
              animate={{
                initial: { x: type === "card" ? 400 : -400 },
                mount: { x: 0 },
                unmount: { x: type === "card" ? 400 : -400 },
              }}
            >
              {/* Card Tab */}
              <TabPanel value="card" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  {error && <Alert color="red">{error}</Alert>}
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium dark:text-dark-primary"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      value={cardData.userEmail}
                      onChange={(e) =>
                        setCardData({
                          ...cardData,
                          userEmail: e.target.value,
                        })
                      }
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium dark:text-dark-primary"
                    >
                      Card Details
                    </Typography>

                    <Input
                      maxLength={19}
                      value={formatCardNumber(cardData.cardNumber)}
                      onChange={(e) =>
                        setCardData({ ...cardData, cardNumber: e.target.value })
                      }
                      icon={
                        <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                      }
                      placeholder="0000 0000 0000 0000"
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />

                    <div className="my-4 flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium dark:text-dark-primary"
                        >
                          Expires
                        </Typography>
                        <Input
                          maxLength={5}
                          value={formatExpires(cardData.expirationDate)}
                          onChange={(e) =>
                            setCardData({
                              ...cardData,
                              expirationDate: e.target.value,
                            })
                          }
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="00/00"
                          className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>

                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium dark:text-dark-primary"
                        >
                          CVV
                        </Typography>
                        <Input
                          maxLength={4}
                          value={cardData.cvv}
                          onChange={(e) =>
                            setCardData({ ...cardData, cvv: e.target.value })
                          }
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="000"
                          className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                    </div>

                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium dark:text-dark-primary"
                    >
                      Cardholder Name
                    </Typography>
                    <Input
                      placeholder="John Doe"
                      value={cardData.cardholderName}
                      onChange={(e) =>
                        setCardData({
                          ...cardData,
                          cardholderName: e.target.value,
                        })
                      }
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-main rounded-full"
                    onClick={payNow}
                  >
                    Pay Now
                  </Button>
                  <Dialog
                    className="rounded-3xl p-8 text-center bg-gradient-to-r from-blue-50 to-orange-50 dark:bg-gradient-to-r dark:from-[#1E2A47] dark:via-[#2B2C4E] dark:to-[#3C2F2F]"
                    open={open}
                    handler={handleOpen}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0.9, y: -100 },
                    }}
                  >
                    <DialogHeader className="flex flex-col gap-8 items-center justify-center">
                      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-green-100 shadow-[0_0_40px_5px_rgba(34,197,94,0.5)]">
                        <FiCheckCircle className="font-bold text-green-600 text-5xl " />
                      </div>
                      <h1 className="font-semibold text-3xl text-green-600">
                        Booking Confirmed!
                      </h1>
                    </DialogHeader>
                    <DialogBody className="flex flex-col gap-4">
                      <h1 className="text-lg dark:text-gray-400">
                        Your flight has been successfully booked. A confirmation
                        email has been sent to your inbox.
                      </h1>
                      <section className="bg-white p-6 rounded-xl flex flex-col gap-6 dark:bg-dark-muted dark:text-gray-400">
                        <h1>Booking Reference</h1>
                        <h1 className="font-semibold text-2xl text-gradient-violet">
                          SKYO93EMT
                        </h1>
                        <h1>
                          Please save this reference number for your records
                        </h1>
                      </section>
                    </DialogBody>
                    <DialogFooter>
                      <Button
                        variant="text"
                        color="red"
                        onClick={() => {
                          handleOpen();
                          goHome();
                        }}
                        className="mr-1"
                      >
                        <span>Back to Home</span>
                      </Button>
                      <Button
                        variant="gradient"
                        color="green"
                        onClick={() => {
                          handleOpen();
                          goUserTrips();
                        }}
                      >
                        <span>Confirm</span>
                      </Button>
                    </DialogFooter>
                  </Dialog>

                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>

              {/* PayPal Tab */}
              <TabPanel value="paypal" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  {error && <Alert color="red">{error}</Alert>}
                  <div>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium dark:text-dark-primary"
                    >
                      Personal Details
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium dark:text-dark-primary"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      value={paypalData.userEmail}
                      onChange={(e) =>
                        setPayPalData({
                          ...paypalData,
                          userEmail: e.target.value,
                        })
                      }
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-6">
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium dark:text-dark-primary"
                    >
                      Billing Address
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium dark:text-dark-primary"
                    >
                      Country
                    </Typography>
                    <Select
                      placeholder="USA"
                      value={paypalData.country}
                      onChange={(val) =>
                        setPayPalData({
                          ...paypalData,
                          country: val,
                        })
                      }
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                      labelProps={{
                        className: "before:content-none after:content-none ",
                      }}
                      menuProps={{
                        className:
                          "h-48 dark:bg-dark-secondary dark:text-dark-primary",
                      }}
                    >
                      {countries.map(({ name, flags }) => (
                        <Option key={name} value={name} className="">
                          <div className="flex items-center gap-x-2 ">
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-4 w-4 rounded-full object-cover"
                            />
                            {name}
                          </div>
                        </Option>
                      ))}
                    </Select>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mt-4 -mb-2 font-medium dark:text-dark-primary"
                    >
                      Postal Code
                    </Typography>
                    <Input
                      placeholder="0000"
                      value={paypalData.postalCode}
                      onChange={(e) =>
                        setPayPalData({
                          ...paypalData,
                          postalCode: e.target.value,
                        })
                      }
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet  dark:text-dark-muted-foreground"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{ className: "mt-4" }}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-main rounded-full"
                    onClick={paypalPayNow}
                  >
                    Pay with PayPal
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-center gap-2 font-medium opacity-60 "
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4 dark:text-gray-200" />{" "}
                    Payments are secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default PayForm;
