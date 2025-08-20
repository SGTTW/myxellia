"use client";

import { useState } from "react";
import SalesOverview from "./SalesOverview";
import ListingsOverview from "@/app/components/Dashboard/ListingsOverview";
import UsersOverview from "@/app/components/Dashboard/UsersOverview";
import HotProperties from "@/app/components/Dashboard/HotProperties";
import BudgetModal from "@/app/components/Dashboard/BudgetModal";

export default function Dashboard() {
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  return (
    <div className="p-6">
      <SalesOverview />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <button
              onClick={() => setIsBudgetModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create Budget
            </button>
          </div>
        </div>

        <HotProperties />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ListingsOverview />
        <UsersOverview />
      </div>

      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
      />
    </div>
  );
}
