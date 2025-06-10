"use client";

import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textfield } from '@/components/ui/Textfield';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Types
interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  status: 'completed' | 'pending' | 'failed';
  wallet: string;
}

// Mock data
const mockTransactions: Transaction[] = [
  {
    id: 'txn_001',
    date: '2023-06-15T10:30:00Z',
    description: 'Grocery Store',
    amount: 85.75,
    type: 'debit',
    category: 'Shopping',
    status: 'completed',
    wallet: 'Personal'
  },
  {
    id: 'txn_002',
    date: '2023-06-14T15:22:00Z',
    description: 'Salary Deposit',
    amount: 2500.00,
    type: 'credit',
    category: 'Income',
    status: 'completed',
    wallet: 'Business'
  },
  {
    id: 'txn_003',
    date: '2023-06-10T09:15:00Z',
    description: 'Internet Bill',
    amount: 59.99,
    type: 'debit',
    category: 'Utilities',
    status: 'pending',
    wallet: 'Personal'
  },
  {
    id: 'txn_004',
    date: '2023-06-05T18:45:00Z',
    description: 'Restaurant',
    amount: 120.50,
    type: 'debit',
    category: 'Food',
    status: 'completed',
    wallet: 'Personal'
  },
  {
    id: 'txn_005',
    date: '2023-06-01T11:20:00Z',
    description: 'Freelance Payment',
    amount: 750.00,
    type: 'credit',
    category: 'Income',
    status: 'completed',
    wallet: 'Savings'
  },
];

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    status: '',
    wallet: '',
    dateRange: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch = txn.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !filters.type || txn.type === filters.type;
    const matchesCategory = !filters.category || txn.category === filters.category;
    const matchesStatus = !filters.status || txn.status === filters.status;
    const matchesWallet = !filters.wallet || txn.wallet === filters.wallet;

    return matchesSearch && matchesType && matchesCategory && matchesStatus && matchesWallet;
  });

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      type: '',
      category: '',
      status: '',
      wallet: '',
      dateRange: ''
    });
    setSearchTerm('');
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Transaction History</h1>
        <p className="text-gray-600">View and manage all your transactions</p>
      </div>
      <div className="bg-white rounded-lg shadow transition-all duration-300 ease-in-out animate-fade-in-up p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="heroicons:magnifying-glass" className="text-gray-400 h-5 w-5" />
            </div>
            <Textfield
              type="text"
              id='search'
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(value: string) => setSearchTerm(value)}
            />
          </div>
          <div className="flex items-center space-x-3">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="ghost"
              size="sm" className="bg-slate-200 flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-slate-300">
              <Icon icon="heroicons:funnel" className="text-gray-500 h-5 w-5 mr-2" />
              Filters
              <Icon
                icon={showFilters ? "heroicons:chevron-up" : "heroicons:chevron-down"}
                className="text-gray-500 h-5 w-5 ml-2"
              />
            </Button>
            <Button variant="ghost" size="sm" className="bg-slate-200 flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-slate-300">
              <Icon icon="heroicons:arrow-down-tray" className="text-gray-500 h-5 w-5 mr-2" />
              Export
            </Button>
          </div>
        </div>
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-slide-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <Label htmlFor="type" className="text-gray-700 font-semibold text-sm">
                  Type
                </Label>
                <Select
                  onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
                  value={filters.type}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Types</SelectLabel>
                      <SelectItem value="credit">Credit</SelectItem>
                      <SelectItem value="debit">Debit</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type" className="text-gray-700 font-semibold text-sm">
                  Type
                </Label>
                <Select
                  onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
                  value={filters.category}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Categories</SelectLabel>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type" className="text-gray-700 font-semibold text-sm">
                  Type
                </Label>
                <Select
                  onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}
                  value={filters.status}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Statuses</SelectLabel>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type" className="text-gray-700 font-semibold text-sm">
                  Wallet
                </Label>
                <Select
                  onValueChange={(value) => setFilters(prev => ({ ...prev, wallet: value }))}
                  value={filters.wallet}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="wallet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Wallets</SelectLabel>
                      <SelectItem value="Personal">Personal</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Savings">Savings</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type" className="text-gray-700 font-semibold text-sm">
                  Date Range
                </Label>
                <Select
                  onValueChange={(value) => setFilters(prev => ({ ...prev, dateRange: value }))}
                  value={filters.dateRange}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="dateRange" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All Time</SelectLabel>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" className='bg-slate-200' onClick={resetFilters}>
                <Icon icon="material-symbols:restart-alt-rounded" />
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedTransactions.length > 0 ? (
                paginatedTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(txn.date).toLocaleDateString()} <br />
                      <span className="text-gray-400">
                        {new Date(txn.date).toLocaleTimeString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{txn.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {txn.wallet}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {txn.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${txn.status === 'completed' ? 'bg-green-100 text-green-800' :
                        txn.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                      {txn.type === 'credit' ? '+' : '-'}${txn.amount.toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No transactions found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>


        {filteredTransactions.length > 0 && (
          <div className="bg-white px-4 py-3 flex flex-wrap ga-3 md:items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="text-sm text-gray-500 my-2">
              Showing {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length} transactions
            </div>

            {totalPages > 1 && (
              <Pagination className="w-fit flex-1">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => setCurrentPage(prev => prev - 1)} />
                    </PaginationItem>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        className='border border-slate-300'
                        isActive={i + 1 === currentPage}
                        onClick={() => setCurrentPage(i + 1)}
                        href="#"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext onClick={() => setCurrentPage(prev => prev + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsPage;