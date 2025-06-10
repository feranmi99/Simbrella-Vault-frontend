"use client";

import React, { useState } from 'react';
import { ExpenseBarChart } from '@/components/analytics/ExpenseBarChart';
import { IncomeExpensePieChart } from '@/components/analytics/IncomeExpensePieChart';
import { WalletDistributionChart } from '@/components/analytics/WalletDistributionChart';
import { TransactionHistory } from '@/components/analytics/TransactionHistory';
import { TimeRangeSelector } from '@/components/analytics/TimeRangeSelector';
import { SummaryCard } from '@/components/analytics/SummaryCard';

const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');
  
  // Mock data for the dashboard
  const dashboardData = {
    summary: {
      totalIncome: 450000,
      totalExpenses: 320000,
      netSavings: 130000,
      transactionsCount: 42,
    },
    expensesByCategory: [
      { category: 'Bills', amount: 120000 },
      { category: 'Shopping', amount: 85000 },
      { category: 'Food', amount: 65000 },
      { category: 'Transport', amount: 30000 },
      { category: 'Entertainment', amount: 20000 },
    ],
    walletBalances: [
      { wallet: 'Primary', balance: 150000 },
      { wallet: 'Savings', balance: 250000 },
      { wallet: 'Business', balance: 50000 },
    ],
    recentTransactions: [
      { id: 1, description: 'Grocery shopping', amount: 25000, date: '2023-06-15', type: 'expense', wallet: 'Primary' },
      { id: 2, description: 'Freelance payment', amount: 120000, date: '2023-06-14', type: 'income', wallet: 'Business' },
      { id: 3, description: 'Electricity bill', amount: 18000, date: '2023-06-12', type: 'expense', wallet: 'Primary' },
      { id: 4, description: 'MTN Airtime', amount: 5000, date: '2023-06-10', type: 'expense', wallet: 'Primary' },
      { id: 5, description: 'Client project', amount: 200000, date: '2023-06-08', type: 'income', wallet: 'Business' },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Financial Analytics</h1>
        <TimeRangeSelector 
          timeRange={timeRange}
          onChange={setTimeRange}
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard 
          title="Total Income" 
          value={dashboardData.summary.totalIncome} 
          trend="up" 
          percentage="12%"
          icon={<CurrencyDollarIcon />}
        />
        <SummaryCard 
          title="Total Expenses" 
          value={dashboardData.summary.totalExpenses} 
          trend="down" 
          percentage="5%"
          icon={<ReceiptIcon />}
        />
        <SummaryCard 
          title="Net Savings" 
          value={dashboardData.summary.netSavings} 
          trend="up" 
          percentage="18%"
          icon={<PiggyBankIcon />}
        />
        <SummaryCard 
          title="Transactions" 
          value={dashboardData.summary.transactionsCount} 
          trend="neutral" 
          percentage="0%"
          icon={<DocumentTextIcon />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
          <div className="h-80">
            <ExpenseBarChart data={dashboardData.expensesByCategory} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
          <div className="h-80">
            <IncomeExpensePieChart 
              income={dashboardData.summary.totalIncome} 
              expenses={dashboardData.summary.totalExpenses} 
            />
          </div>
        </div>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Wallet Distribution</h2>
          <div className="h-80">
            <WalletDistributionChart data={dashboardData.walletBalances} />
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <TransactionHistory transactions={dashboardData.recentTransactions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

// Helper icons components
const CurrencyDollarIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ReceiptIcon = () => (
  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
  </svg>
);

const PiggyBankIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const DocumentTextIcon = () => (
  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);