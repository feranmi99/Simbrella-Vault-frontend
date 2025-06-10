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

  // Mocked services data
  const services = {
    airtime: [
      { id: 1, name: 'MTN Airtime', icon: '/icons/mtn.png' },
      { id: 2, name: 'Airtel Airtime', icon: '/icons/airtel.png' },
      { id: 3, name: 'Glo Airtime', icon: '/icons/glo.png' },
      { id: 4, name: '9mobile Airtime', icon: '/icons/9mobile.png' },
    ],
    data: [
      { id: 5, name: 'MTN Data Plans', icon: '/icons/mtn.png' },
      { id: 6, name: 'Airtel Data Plans', icon: '/icons/airtel.png' },
      { id: 7, name: 'Glo Data Plans', icon: '/icons/glo.png' },
      { id: 8, name: '9mobile Data Plans', icon: '/icons/9mobile.png' },
    ],
    electricity: [
      { id: 9, name: 'IKEDC', icon: '/icons/ikedc.png' },
      { id: 10, name: 'EKEDC', icon: '/icons/ekedc.png' },
      { id: 11, name: 'PHED', icon: '/icons/phed.png' },
      { id: 12, name: 'KAEDCO', icon: '/icons/kaedco.png' },
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Pay for Services</h1>
      
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
        <>
          <ServiceCategorySelector 
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {services[activeCategory as keyof typeof services].map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleServiceSelect(service)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PayForServicesPage;