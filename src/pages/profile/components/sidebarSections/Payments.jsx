import { LuCreditCard } from "react-icons/lu";
import { Button, Card, Chip } from "@material-tailwind/react";

const paymentMethods = [
  {
    id: 1,
    lastFour: "4242",
    expiry: "12/26",
  },
];

const Payments = () => {
  return (
    <div>
      <h1 className="mb-4 text-gray-800">Payment Methods</h1>

      <div className="space-y-6">
        {paymentMethods.map(({ id, lastFour, expiry }) => (
          <Card
            key={id}
            className=" p-6 shadow-lg border border-purple-100  hover:border-purple-600"
          >
            <div className="flex flex-col gap-4 justify-between items-center  md:flex-row ">
              <div className="flex flex-row gap-4 ">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-light-blue-400 to-deep-purple-300 flex items-center justify-center ">
                  <LuCreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold text-gray-900">
                    •••• •••• •••• {lastFour}
                  </p>

                  <p className="text-sm text-gray-500"> Expires {expiry}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center md:items-end">
                <Chip
                  value="Default"
                  size="sm"
                  className={`rounded-full px-3 py-1  text-green-400 bg-green-100 `}
                />
              </div>
            </div>
          </Card>
        ))}
        <Button
          variant="outlined"
          className="rounded-xl w-full border-dashed border-2 border-dark-chart-2 text-deep-purple-500 hover:border-deep-purple-600"
        >
          + Add New Card
        </Button>
      </div>
    </div>
  );
};

export default Payments;
