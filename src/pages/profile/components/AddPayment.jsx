import { useState } from "react";
import { LuCreditCard } from "react-icons/lu";
import {
  Button,
  Card,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  IconButton,
  Alert,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AddPayment = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, cardNumber: "1234 5678 9876 4242", expirationDate: "12/26" },
  ]);

  const [cardData, setCardData] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [error, setError] = useState("");

  const handleSaveCard = () => {
    const { cardholderName, cardNumber, expirationDate, cvv } = cardData;

    if (
      !cardholderName.trim() ||
      !cardNumber.trim() ||
      !expirationDate.trim() ||
      !cvv.trim()
    ) {
      return setError("Please fill in all fields");
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

    setError("");
    setPaymentMethods((prev) => [...prev, { cardNumber, expirationDate }]);

    setCardData({
      cardholderName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
    setOpen(false);
  };

  return (
    <div>
      <h1 className="mb-4 text-gray-800 dark:text-white">Payment Methods</h1>

      <div className="space-y-6">
        {paymentMethods.map(({ cardNumber, expirationDate }, index) => (
          <Card
            key={index}
            className="p-6 shadow-lg border border-purple-100 hover:shadow-gradient-violet/30 
              hover:scale-[1.01] hover:border-gradient-violet duration-500 dark:bg-dark-muted dark:border-dark-border"
          >
            <div className="flex flex-col gap-4 justify-between items-center md:flex-row ">
              <div className="flex flex-row gap-4 ">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-light-blue-400 to-deep-purple-300 flex items-center justify-center ">
                  <LuCreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    •••• •••• •••• {cardNumber.slice(-4)}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-white">
                    Expires {expirationDate}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-end">
                <Chip
                  value="Default"
                  size="sm"
                  className="rounded-full px-3 py-1 text-green-400 bg-green-100"
                />
              </div>
            </div>
          </Card>
        ))}

        <Button
          variant="outlined"
          className="rounded-xl w-full border-dashed border-2 border-purple-400 text-deep-purple-500 hover:border-deep-purple-600 dark:text-white"
          onClick={handleOpen}
        >
          + Add New Card
        </Button>
      </div>

      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="dark:bg-dark-muted"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" className="dark:text-white">
            Link Payment Card
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600 dark:text-gray-300">
            Complete the form below with your card details to link your card.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2 dark:text-white" />
          </IconButton>
        </DialogHeader>

        <DialogBody className="space-y-4 pb-6">
          {error && <Alert color="red">{error}</Alert>}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium dark:text-white"
            >
              Cardholder Name
            </Typography>
            <Input
              color="purple"
              size="lg"
              placeholder="e.g., John Doe"
              className="placeholder:opacity-100  focus:!border-t-purple-600 dark:text-white "
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
              value={cardData.cardholderName}
              onChange={(e) =>
                setCardData({ ...cardData, cardholderName: e.target.value })
              }
            />
          </div>

          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium dark:text-white"
            >
              Card Number
            </Typography>
            <Input
              color="purple"
              size="lg"
              placeholder="1234 5678 9876 4242"
              maxLength={19}
              className="placeholder:opacity-100 focus:!border-t-purple-600 dark:text-white"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
              value={cardData.cardNumber}
              onChange={(e) =>
                setCardData({ ...cardData, cardNumber: e.target.value })
              }
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-white"
              >
                Expiration Date
              </Typography>
              <Input
                color="purple"
                size="lg"
                placeholder="MM/YY"
                maxLength={5}
                className="placeholder:opacity-100  focus:!border-t-purple-600 dark:text-white"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                value={cardData.expirationDate}
                onChange={(e) =>
                  setCardData({ ...cardData, expirationDate: e.target.value })
                }
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-white"
              >
                CVV
              </Typography>
              <Input
                color="purple"
                size="lg"
                placeholder="123"
                maxLength={3}
                className="placeholder:opacity-100  focus:!border-t-purple-600 dark:text-white"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                value={cardData.cvv}
                onChange={(e) =>
                  setCardData({ ...cardData, cvv: e.target.value })
                }
              />
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button className="ml-auto bg-gradient-main" onClick={handleSaveCard}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddPayment;
