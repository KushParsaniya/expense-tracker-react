import React from 'react';

function ExpenseCard({ amount, description, expenseTypeName, createdDate }) {
    // Format the date (optional)
    const formattedDate = new Date(createdDate).toLocaleDateString();

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">{description}</h3>
                <span className="text-gray-600 text-sm font-medium">{amount}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
                <p className="text-gray-500 text-sm">Category: {expenseTypeName}</p>
                <p className="text-gray-500 text-sm">Date: {formattedDate}</p>
            </div>
        </div>
    );
}

export default ExpenseCard;
