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
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AddPaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, cardNumber: "1234 5678 9876 4242", expiry: "12/26" },
  ]);

  const [cardData, setCardData] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <h1 className="mb-4 text-gray-800">Payment Methods</h1>

      <div className="space-y-6">
        {paymentMethods.map(({ id, cardNumber, expiry }) => (
          <Card
            key={id}
            className="p-6 shadow-lg border border-purple-100 hover:shadow-gradient-violet/30 
              hover:scale-[1.01] hover:border-gradient-violet duration-500"
          >
            <div className="flex flex-col gap-4 justify-between items-center md:flex-row ">
              <div className="flex flex-row gap-4 ">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-light-blue-400 to-deep-purple-300 flex items-center justify-center ">
                  <LuCreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold text-gray-900">
                    •••• •••• •••• {cardNumber.slice(-4)}
                  </p>

                  <p className="text-sm text-gray-500">Expires {expiry}</p>
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
          className="rounded-xl w-full border-dashed border-2 border-purple-400 text-deep-purple-500 hover:border-deep-purple-600"
          onClick={handleOpen}
        >
          + Add New Card
        </Button>
      </div>

      <Dialog size="m" open={open} handler={handleOpen}>
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">Link Payment Card</Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Complete the form below with your card details to link your card.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>

        <DialogBody className="space-y-4 pb-6">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Cardholder Name
            </Typography>
            <Input
              color="purple"
              size="lg"
              placeholder="e.g., John Doe"
              name="name"
              className="placeholder:opacity-100  focus:!border-t-purple-600 "
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
              className="mb-2 text-left font-medium"
            >
              Card Number
            </Typography>
            <Input
              color="purple"
              size="lg"
              placeholder="1234 5678 9876 4242"
              maxLength={19}
              className="placeholder:opacity-100 focus:!border-t-purple-600"
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
                className="mb-2 text-left font-medium"
              >
                Expiration Date
              </Typography>
              <Input
                color="purple"
                size="lg"
                placeholder="MM/YY"
                maxLength={5}
                className="placeholder:opacity-100  focus:!border-t-purple-600"
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
                className="mb-2 text-left font-medium"
              >
                CVV
              </Typography>
              <Input
                color="purple"
                size="lg"
                placeholder="123"
                maxLength={3}
                className="placeholder:opacity-100  focus:!border-t-purple-600"
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
          <Button className="ml-auto bg-gradient-main" onClick={handleOpen}>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddPaymentMethod;
