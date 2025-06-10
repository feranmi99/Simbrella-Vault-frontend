"use client"

import { PaymentForm } from '@/components/Service/PaymentForm';
import { ServiceCard } from '@/components/Service/ServiceCard';
import { ServiceCategorySelector } from '@/components/Service/ServiceCategorySelector';
import { TransactionConfirmation } from '@/components/Service/TransactionConfirmation';
import { ServiceType } from '@/types';
import React, { useState } from 'react';

const PayForServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('airtime');
  const [transactionSuccess, setTransactionSuccess] = useState<boolean | null>(null);

  // Services data with additional metadata
  const services = {
    airtime: [
      { id: 1, name: 'MTN Airtime', icon: '/icons/mtn.png', color: 'bg-yellow-100' },
      { id: 2, name: 'Airtel Airtime', icon: '/icons/airtel.png', color: 'bg-red-100' },
      { id: 3, name: 'Glo Airtime', icon: '/icons/glo.png', color: 'bg-green-100' },
      { id: 4, name: '9mobile Airtime', icon: '/icons/9mobile.png', color: 'bg-teal-100' },
    ],
    data: [
      { id: 5, name: 'MTN Data', icon: '/icons/mtn.png', color: 'bg-yellow-100' },
      { id: 6, name: 'Airtel Data', icon: '/icons/airtel.png', color: 'bg-red-100' },
      { id: 7, name: 'Glo Data', icon: '/icons/glo.png', color: 'bg-green-100' },
      { id: 8, name: '9mobile Data', icon: '/icons/9mobile.png', color: 'bg-teal-100' },
    ],
    electricity: [
      { id: 9, name: 'IKEDC', icon: '/icons/ikedc.png', color: 'bg-blue-100' },
      { id: 10, name: 'EKEDC', icon: '/icons/ekedc.png', color: 'bg-purple-100' },
      { id: 11, name: 'PHED', icon: '/icons/phed.png', color: 'bg-orange-100' },
      { id: 12, name: 'KAEDCO', icon: '/icons/kaedco.png', color: 'bg-indigo-100' },
    ],
  };

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    setTransactionSuccess(null);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  const handlePaymentSuccess = () => {
    setTransactionSuccess(true);
  };

  const handlePaymentError = () => {
    setTransactionSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Payments</h1>
          <p className="text-gray-600 mt-2">Select a service to make payment</p>
        </header>
        
        {transactionSuccess !== null ? (
          <TransactionConfirmation 
            success={transactionSuccess} 
            onBack={handleBackToServices}
            transactionDetails={selectedService}
          />
        ) : selectedService ? (
          <PaymentForm 
            service={selectedService} 
            onBack={handleBackToServices}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ServiceCategorySelector 
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services[activeCategory as keyof typeof services].map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => handleServiceSelect(service)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayForServicesPage;