import React from "react";

function TransactionDetailListDashboard({
  goalLogo,
  type,
  disc,
  color,
  price,
  children,
}) {
  return (
    <div className="flex flex-row flex-wrap border-b-2 pb-2 justify-between">
      <div className="flex flex-row lg:gap-4">
        <div className="flex items-center">
          <img src={goalLogo + ".png"} alt="" className="h-[2.5rem]" />
        </div>
        <div>
          <p className="text-[#3A89A0] text-l font-semibold">{type}</p>
          <p className="text-l font-medium">{disc}</p>
        </div>
      </div>
      <div className={color}>
        <p className="text-xl font-medium">{price}</p>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}

export default TransactionDetailListDashboard;
