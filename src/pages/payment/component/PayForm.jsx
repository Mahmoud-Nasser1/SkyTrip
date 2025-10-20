import React from "react";
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
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="w-full flex justify-center py-24">
      <Card className="w-1/2 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gradient-violet/30 hover:border-gradient-violet">
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

        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0">
              <Tab value="card" onClick={() => setType("card")}>
                Pay with Card
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
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
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Card Details
                    </Typography>

                    <Input
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(e) => setCardNumber(e.target.value)}
                      icon={
                        <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                      }
                      placeholder="0000 0000 0000 0000"
                      className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />

                    <div className="my-4 flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          Expires
                        </Typography>
                        <Input
                          maxLength={5}
                          value={formatExpires(cardExpires)}
                          onChange={(e) => setCardExpires(e.target.value)}
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="00/00"
                          className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>

                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          CVC
                        </Typography>
                        <Input
                          maxLength={4}
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="000"
                          className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                    </div>

                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Holder Name
                    </Typography>
                    <Input
                      placeholder="John Doe"
                      className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-main rounded-full"
                    onClick={handleOpen}
                  >
                    Pay Now
                  </Button>
                  <Dialog
                    className="rounded-3xl p-8 text-center bg-gradient-to-r from-blue-50 to-orange-50"
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
                      <h1 className="text-lg">
                        Your flight has been successfully booked. A confirmation
                        email has been sent to your inbox.
                      </h1>
                      <section className="bg-white p-6 rounded-xl flex flex-col gap-6">
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
                        onClick={handleOpen}
                        className="mr-1"
                      >
                        <span>Cancel</span>
                      </Button>
                      <Button
                        variant="gradient"
                        color="green"
                        onClick={() => {
                          handleOpen();
                          goHome();
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
                  <div>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-gradient-violet"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-6">
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Billing Address
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Country
                    </Typography>
                    <Select
                      placeholder="USA"
                      className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      menuProps={{ className: "h-48" }}
                    >
                      {countries.map(({ name, flags }) => (
                        <Option key={name} value={name}>
                          <div className="flex items-center gap-x-2">
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
                      className="mt-4 -mb-2 font-medium"
                    >
                      Postal Code
                    </Typography>
                    <Input
                      placeholder="0000"
                      className="!border-t-blue-gray-200 focus:!border-t-gradient-violet"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{ className: "mt-4" }}
                    />
                  </div>

                  <Button size="lg" className="bg-gradient-main rounded-full">
                    Pay with PayPal
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
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
