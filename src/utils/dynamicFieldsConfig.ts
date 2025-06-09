type FieldDefinition = {
    key: string;
    label: string;
    type: 'input' | 'select' | 'checkbox' | 'textarea';
    options?: string[];
    placeholder?: string;
    dependsOn?: string;
    required?: boolean;
};

export const dynamicFieldsConfig: Record<number, FieldDefinition[]> = {
    1: [
        { key: 'make', label: 'Car Make', type: 'select', required: true, options: ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Lexus', 'Nissan', 'Hyundai', 'Kia', 'Volkswagen'] },
        { key: 'model', label: 'Car Model', type: 'select', dependsOn: 'make', required: true, options: [] }, // depends on make
        { key: 'year', label: 'Year of Manufacture', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2010-2014', '2005-2009', '2000-2004', 'Before 2000'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Silver', 'Blue', 'Red', 'Gray', 'Green', 'Gold', 'Brown'] },
        { key: 'transmission', label: 'Transmission', type: 'select', required: true, options: ['Automatic', 'Manual'] },
        { key: 'fuel_type', label: 'Fuel Type', type: 'select', required: true, options: ['Petrol', 'Diesel', 'Electric', 'Hybrid'] },
        { key: 'drive_type', label: 'Drive Type', type: 'select', required: false, options: ['FWD (Front-Wheel Drive)', 'RWD (Rear-Wheel Drive)', 'AWD (All-Wheel Drive)', '4WD (Four-Wheel Drive)'] },
        { key: 'seats', label: 'Seats', type: 'select', required: false, options: ['2', '4', '5', '6', '7', '8+'] },
        { key: 'number_of_cylinders', label: 'Number of Cylinders', type: 'select', required: false, options: ['3', '4', '6', '8', '10', '12'] },
        { key: 'engine_size', label: 'Engine Size (cc)', type: 'select', required: true, options: ['< 1.0L', '1.0 - 1.5L', '1.6 - 2.0L', '2.1 - 3.0L', '> 3.0L'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Foreign Used', 'Nigerian Used'] },
        { key: 'mileage', label: 'Mileage (km)', type: 'input', required: true },
        { key: 'number_of_doors', label: 'Number of Doors', type: 'select', required: true, options: ['2', '3', '4', '5'] },
        { key: 'features', label: 'Car Features', type: 'checkbox', required: false, options: ['Air Conditioning', 'Leather Seats', 'Sunroof', 'Alloy Wheels', 'Navigation System', 'Parking Sensors', 'Reverse Camera', 'Bluetooth', 'Roof Rack', 'Heated Seats'] },
        { key: 'registration', label: 'Registered?', type: 'select', required: true, options: ['Yes', 'No'] },
    ],
    2: [
        { key: 'make', label: 'Bus Make', type: 'select', required: true, options: ['Toyota', 'Ford', 'Mercedes-Benz', 'Nissan', 'Volkswagen', 'Hyundai', 'Isuzu', 'TATA', 'Iveco'] },
        { key: 'model', label: 'Bus Model', type: 'select', required: true, dependsOn: 'make', options: [] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Foreign Used', 'Nigerian Used'] },
        { key: 'seating_capacity', label: 'Seating Capacity', type: 'select', options: ['5-10', '11-15', '16-20', '21-30', '31-50', 'More than 50'] },
        { key: 'drive_type', label: 'Drive Type', type: 'select', options: ['FWD (Front-Wheel Drive)', 'RWD (Rear-Wheel Drive)', 'AWD (All-Wheel Drive)', '4WD (Four-Wheel Drive)'] },
        { key: 'transmission', label: 'Transmission', type: 'select', required: true, options: ['Automatic', 'Manual'] },
        { key: 'mileage', label: 'Mileage (km)', type: 'input' },
        { key: 'engine_size', label: 'Engine Size', type: 'select', options: ['< 1.5L', '1.6 - 2.5L', '2.6 - 3.5L', '3.6 - 4.5L', '> 4.5L'] },
        { key: 'color', label: 'Color', type: 'select', options: ['White', 'Black', 'Silver', 'Blue', 'Red', 'Yellow', 'Green', 'Gray'] },
        { key: 'fuel_type', label: 'Fuel Type', type: 'select', required: true, options: ['Petrol', 'Diesel', 'Electric', 'Hybrid'] },
        { key: 'body_type', label: 'Body Type', type: 'select', options: ['Mini Bus', 'Mid-size Bus', 'Coach', 'Double Decker', 'Microbus', 'Van'] },
        { key: 'year', label: 'Year of Manufacture', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2015-2017', '2010-2014', '2005-2009', '2000-2004', 'Before 2000'] },
        { key: 'features', label: 'Bus Features', type: 'checkbox', options: ['Air Conditioning', 'Power Steering', 'ABS', 'Bluetooth', 'Reverse Camera', 'Reclining Seats', 'TV/Entertainment', 'Tinted Windows', 'Roof Hatch', 'Wheelchair Accessible'] },
        { key: 'registration', label: 'Registered?', type: 'select', options: ['Yes', 'No'] },
    ],
    3: [
        { key: 'make', label: 'Equipment Make', type: 'select', required: true, options: ['Caterpillar', 'Komatsu', 'John Deere', 'Hitachi', 'Volvo', 'JCB', 'Liebherr', 'Doosan', 'Hyundai', 'Case'] },
        { key: 'model', label: 'Equipment Model', type: 'select', required: true, dependsOn: 'make', options: [] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Yellow', 'Orange', 'White', 'Black', 'Green', 'Red', 'Blue', 'Gray'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Foreign Used', 'Nigerian Used'] },
        { key: 'equipment_type', label: 'Equipment Type', type: 'select', required: true, options: ['Excavator', 'Bulldozer', 'Wheel Loader', 'Backhoe Loader', 'Motor Grader', 'Crane', 'Forklift', 'Compactor', 'Skid Steer', 'Concrete Mixer', 'Other'] },
        { key: 'hours_used', label: 'Hours Used (Optional)', type: 'input' },
        { key: 'fuel_type', label: 'Fuel Type', type: 'select', required: true, options: ['Diesel', 'Petrol', 'Electric', 'Hybrid'] },
        { key: 'engine_power', label: 'Engine Power (HP)', type: 'input' },
        { key: 'operating_weight', label: 'Operating Weight (tons)', required: true, type: 'input' },
        { key: 'year', label: 'Year of Manufacture', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2015-2018', '2010-2014', '2005-2009', '2000-2004', 'Before 2000'] },
        { key: 'features', label: 'Equipment Features', type: 'checkbox', options: ['Air Conditioning', 'Enclosed Cab', 'Quick Coupler', 'Auxiliary Hydraulics', 'Four-Wheel Drive', 'GPS', 'Warranty Available'] },
        { key: 'registration', label: 'Registered?', required: true, type: 'select', options: ['Yes', 'No'] },
    ],
    4: [
        { key: 'make', label: 'Motorcycle/Scooter Make', type: 'select', required: true, options: ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Bajaj', 'TVS', 'Hero', 'Kymco', 'Vespa', 'Piaggio', 'Ducati', 'Harley-Davidson'] },
        { key: 'model', label: 'Model', type: 'select', required: true, dependsOn: 'make', options: [] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Foreign Used', 'Nigerian Used'] },
        { key: 'mileage', label: 'Mileage (km)', required: true, type: 'input' },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Silver', 'Gray', 'Orange'] },
        { key: 'engine_capacity', label: 'Engine Capacity (cc)', type: 'select', required: true, options: ['Below 50cc', '50cc - 125cc', '126cc - 250cc', '251cc - 500cc', '501cc - 750cc', '751cc - 1000cc', 'Above 1000cc'] },
        { key: 'transmission', label: 'Transmission', type: 'select', required: true, options: ['Manual', 'Automatic'] },
        { key: 'fuel_type', label: 'Fuel Type', type: 'select', required: true, options: ['Petrol', 'Electric', 'Hybrid'] },
        { key: 'year', label: 'Year of Manufacture', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2015-2018', '2010-2014', '2005-2009', '2000-2004', 'Before 2000'] },
        { key: 'features', label: 'Motorcycle/Scooter Features', type: 'checkbox', options: ['ABS', 'LED Lights', 'Bluetooth', 'Windshield', 'Crash Bars', 'Saddlebags', 'Custom Exhaust', 'Navigation'] },
        { key: 'registration', label: 'Registered?', type: 'select', required: true, options: ['Yes', 'No'] },
    ],
    5: [
        { key: 'make', label: 'Truck/Trailer Make', type: 'select', required: true, options: ['Mercedes-Benz', 'Mack', 'Volvo', 'MAN', 'Scania', 'DAF', 'Iveco', 'Ford', 'Toyota', 'Isuzu', 'Foton', 'FAW'] },
        { key: 'model', label: 'Model', type: 'select', required: true, dependsOn: 'make', options: [] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Foreign Used', 'Nigerian Used'] },
        { key: 'mileage', label: 'Mileage (km)', type: 'input' },
        { key: 'number_of_axles', label: 'Number of Axles', type: 'select', options: ['2', '3', '4', '5', 'More than 5'] },
        { key: 'year', label: 'Year of Manufacture', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2015-2018', '2010-2014', '2005-2009', '2000-2004', 'Before 2000'] },
        { key: 'transmission', label: 'Transmission', type: 'select', required: true, options: ['Manual', 'Automatic'] },
        { key: 'load_capacity', label: 'Load Capacity (tons)', type: 'input' },
        { key: 'fuel_type', label: 'Fuel Type', type: 'select', required: true, options: ['Diesel', 'Petrol'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['White', 'Blue', 'Red', 'Yellow', 'Green', 'Black', 'Gray', 'Silver'] },
        { key: 'truck_type', label: 'Truck/Trailer Type', type: 'select', required: true, options: ['Flatbed Truck', 'Tipper', 'Box Truck', 'Refrigerated Truck', 'Tanker', 'Lowbed Trailer', 'Container Trailer', 'Dump Truck', 'Chassis Truck', 'Other'] },
        { key: 'features', label: 'Truck/Trailer Features', type: 'checkbox', options: ['Air Conditioning', 'ABS', 'Power Steering', 'Navigation', 'Tail Lift', 'Sleeping Cabin', 'Refrigerated'] },
        { key: 'registration', label: 'Registered?', required: true, type: 'select', options: ['Yes', 'No'] },
    ],
    6: [
        { key: 'category', label: 'Category', type: 'select', required: true, options: ['Engine Parts', 'Suspension', 'Brakes', 'Exhaust System', 'Electrical Parts', 'Body Parts', 'Interior Accessories', 'Tires & Wheels', 'Car Audio', 'Lighting', 'Performance Parts', 'Other'] },
        { key: 'make', label: 'Vehicle Make', type: 'select', required: true, options: ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia', 'Chevrolet', 'Other'] },
        { key: 'model', label: 'Vehicle Model', type: 'select', required: true, dependsOn: 'make', options: [] },
        { key: 'year', label: 'Year of Manufacture', required: true, type: 'select', options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2015-2018', '2010-2014', '2005-2009', '2000-2004', 'Before 2000'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input', required: true },
        { key: 'material', label: 'Material', type: 'select', options: ['Metal', 'Plastic', 'Rubber', 'Leather', 'Fabric', 'Glass', 'Other'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Other'] },
        { key: 'compatibility', label: 'Compatibility', type: 'checkbox', options: ['Universal', 'Specific Model/Year', 'Specific Make/Model'] },
        { key: 'features', label: 'Features', type: 'checkbox', required: true, options: ['Durable', 'Waterproof', 'Weather Resistant', 'Adjustable', 'Customizable', 'Energy Efficient', 'Eco-Friendly', 'LED Lighting', 'Wireless'] }
    ],
    7: [
        { key: 'make', label: 'Make', type: 'select', required: true, options: ['Yamaha', 'Honda', 'Mercury', 'Suzuki', 'Evinrude', 'Sea Ray', 'Bayliner', 'Chaparral', 'Boston Whaler', 'Cobalt', 'Other'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'make', options: [] }, // depends on make
        { key: 'year', label: 'Year of Manufacture', required: true, type: 'select', options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2015-2018', '2010-2014', '2005-2009', 'Before 2005'] },
        { key: 'condition', label: 'Condition', required: true, type: 'select', options: ['Brand New', 'Used'] },
        { key: 'length', label: 'Length (ft)', type: 'input' },
        { key: 'engine_type', label: 'Engine Type', required: true, type: 'select', options: ['Inboard', 'Outboard', 'Jet'] },
        { key: 'fuel_type', label: 'Fuel Type', required: true, type: 'select', options: ['Gasoline', 'Diesel', 'Electric'] },
        { key: 'boat_type', label: 'Boat Type', type: 'select', options: ['Cruiser', 'Fishing', 'Ski', 'Pontoon', 'Yacht', 'Canoe/Kayak', 'Jet Ski', 'Rib', 'Other'] },
        { key: 'features', label: 'Features', required: true, type: 'checkbox', options: ['Air Conditioning', 'Navigation System', 'Waterproof', 'Bluetooth', 'Sleeping Cabin', 'Refrigerated', 'Fishing Gear', 'Sun Deck', 'Stereo', 'Bimini Top'] },
        { key: 'color', label: 'Color', required: true, type: 'select', options: ['White', 'Blue', 'Red', 'Green', 'Black', 'Yellow', 'Gray', 'Other'] },
        { key: 'registration', label: 'Registered?', required: true, type: 'select', options: ['Yes', 'No'] },
    ],
    8: [
        { key: 'service_type', label: 'Service Type', type: 'select', required: true, options: ['Oil Change', 'Tire Replacement', 'Brake Service', 'Transmission Repair', 'Engine Diagnostics', 'Battery Service', 'Alignment', 'Air Conditioning Service', 'Windshield Repair', 'Detailing', 'Window Tinting', 'Custom Modifications', 'Other'] },
        { key: 'vehicle_make', label: 'Vehicle Make', type: 'select', required: true, options: ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia', 'Chevrolet', 'Other'] },
        { key: 'vehicle_model', label: 'Vehicle Model', type: 'select', required: true, dependsOn: 'vehicle_make', options: [] },
        { key: 'year', label: 'Year of Vehicle', type: 'select', options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2015-2018', '2010-2014', '2005-2009', 'Before 2005'] },
        { key: 'condition', label: 'Condition of Vehicle', type: 'select', required: true, options: ['Brand New', 'Used'] },
        { key: 'service_hours', label: 'Service Hours', type: 'input' },
        { key: 'warranty', label: 'Warranty Available?', type: 'select', options: ['Yes', 'No'] },
        { key: 'available_on', label: 'Available On', type: 'checkbox', options: ['Weekdays', 'Weekends', 'Holidays'] }
    ],
    9: [
        { key: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Apartment', 'House', 'Penthouse', 'Villa', 'Studio', 'Duplex', 'Townhouse', 'Bungalow'] },
        { key: 'bedrooms', label: 'Number of Bedrooms', type: 'select', required: true, options: ['1', '2', '3', '4', '5+'] },
        { key: 'bathrooms', label: 'Number of Bathrooms', type: 'select', required: true, options: ['1', '2', '3', '4+'] },
        { key: 'size', label: 'Size (sq ft)', type: 'input', required: true },
        { key: 'year_built', label: 'Year Built', required: true, type: 'select', options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', 'Before 2016'] },
        { key: 'floor_type', label: 'Floor Type', type: 'select', options: ['Tiles', 'Wood', 'Carpet', 'Concrete', 'Marble', 'Other'] },
        { key: 'parking', label: 'Parking Available?', required: true, type: 'select', options: ['Yes', 'No'] },
        { key: 'amenities', label: 'Amenities', type: 'checkbox', options: ['Swimming Pool', 'Gym', 'Security', 'Playground', 'Garden', 'Elevator', '24/7 Water Supply', 'Electricity Backup', 'Wi-Fi', 'Other'] },
    ],
    10: [
        { key: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Apartment', 'House', 'Penthouse', 'Studio', 'Duplex', 'Townhouse', 'Bungalow'] },
        { key: 'bedrooms', label: 'Number of Bedrooms', type: 'select', required: true, options: ['1', '2', '3', '4', '5+'] },
        { key: 'bathrooms', label: 'Number of Bathrooms', type: 'select', required: true, options: ['1', '2', '3', '4+'] },
        { key: 'size', label: 'Size (sq ft)', type: 'input', required: true },
        { key: 'price', label: 'Monthly Rent', type: 'input', required: true },
        { key: 'lease_type', label: 'Lease Type', type: 'select', required: true, options: ['Short Term', 'Long Term'] },
        { key: 'furnishing', label: 'Furnishing Status', required: true, type: 'select', options: ['Furnished', 'Unfurnished', 'Semi-Furnished'] },
        { key: 'parking', label: 'Parking Available?', required: true, type: 'select', options: ['Yes', 'No'] },
        { key: 'pets_allowed', label: 'Pets Allowed?', type: 'select', options: ['Yes', 'No'] },
        { key: 'amenities', label: 'Amenities', type: 'checkbox', options: ['Swimming Pool', 'Gym', 'Security', 'Playground', 'Garden', 'Elevator', '24/7 Water Supply', 'Electricity Backup', 'Wi-Fi', 'Other'] },
    ],
    11: [
        { key: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Apartment', 'House', 'Penthouse', 'Studio', 'Duplex', 'Townhouse', 'Bungalow'] },
        { key: 'bedrooms', label: 'Number of Bedrooms', type: 'select', required: true, options: ['1', '2', '3', '4', '5+'] },
        { key: 'bathrooms', label: 'Number of Bathrooms', type: 'select', required: true, options: ['1', '2', '3', '4+'] },
        { key: 'size', label: 'Size (sq ft)', type: 'input', required: true },
        { key: 'year_built', label: 'Year Built', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', 'Before 2016'] },
        { key: 'floor_type', label: 'Floor Type', type: 'select', required: false, options: ['Tiles', 'Wood', 'Carpet', 'Concrete', 'Marble', 'Other'] },
        { key: 'parking', label: 'Parking Available?', type: 'select', required: true, options: ['Yes', 'No'] },
        { key: 'furnishing', label: 'Furnishing Status', type: 'select', required: false, options: ['Furnished', 'Unfurnished', 'Semi-Furnished'] },
        { key: 'amenities', label: 'Amenities', type: 'checkbox', required: false, options: ['Swimming Pool', 'Gym', 'Security', 'Playground', 'Garden', 'Elevator', '24/7 Water Supply', 'Electricity Backup', 'Wi-Fi', 'Other'] },
    ],
    12: [
        { key: 'land_type', label: 'Land Type', type: 'select', required: true, options: ['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Mixed-Use'] },
        { key: 'size', label: 'Size (sq meters)', type: 'input', required: true },
        { key: 'price', label: 'Monthly Rent', type: 'input', required: true },
        { key: 'lease_type', label: 'Lease Type', type: 'select', required: true, options: ['Short Term', 'Long Term'] },
        { key: 'utilities_included', label: 'Utilities Included', type: 'checkbox', required: false, options: ['Water', 'Electricity', 'Gas', 'Waste Management'] },
        { key: 'fencing', label: 'Is the Land Fenced?', type: 'select', required: false, options: ['Yes', 'No'] },
    ],
    13: [
        { key: 'land_type', label: 'Land Type', type: 'select', required: true, options: ['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Mixed-Use'] },
        { key: 'size', label: 'Size (sq meters)', type: 'input', required: true },
        { key: 'year_acquired', label: 'Year Acquired', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', 'Before 2018'] },
        { key: 'fencing', label: 'Is the Land Fenced?', type: 'select', required: false, options: ['Yes', 'No'] },
        { key: 'utilities_available', label: 'Utilities Available', type: 'checkbox', required: false, options: ['Water', 'Electricity', 'Gas', 'Waste Management'] },
        { key: 'land_title', label: 'Land Title', type: 'select', required: true, options: ['Freehold', 'Leasehold', 'Customary'] },
    ],
    14: [
        { key: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Office Space', 'Retail Space', 'Warehouse', 'Factory', 'Showroom', 'Land'] },
        { key: 'size', label: 'Size (sq meters)', type: 'input', required: true },
        { key: 'price', label: 'Monthly Rent', type: 'input', required: true },
        { key: 'lease_type', label: 'Lease Type', type: 'select', required: true, options: ['Short Term', 'Long Term'] },
        { key: 'parking', label: 'Parking Available?', type: 'select', required: false, options: ['Yes', 'No'] },
        { key: 'security', label: 'Security Available?', type: 'select', required: false, options: ['Yes', 'No'] },
        { key: 'utilities_included', label: 'Utilities Included', type: 'checkbox', required: false, options: ['Water', 'Electricity', 'Gas', 'Waste Management'] },
        { key: 'floor_type', label: 'Floor Type', type: 'select', required: false, options: ['Tiles', 'Wood', 'Carpet', 'Concrete', 'Marble', 'Other'] },
    ],
    15: [
        { key: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Office Space', 'Retail Space', 'Warehouse', 'Factory', 'Showroom', 'Land'] },
        { key: 'size', label: 'Size (sq meters)', type: 'input', required: true },
        { key: 'year_built', label: 'Year Built', type: 'select', required: true, options: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', 'Before 2017'] },
        { key: 'floor_type', label: 'Floor Type', type: 'select', required: false, options: ['Tiles', 'Wood', 'Carpet', 'Concrete', 'Marble', 'Other'] },
        { key: 'security', label: 'Security Available?', type: 'select', required: false, options: ['Yes', 'No'] },
        { key: 'parking', label: 'Parking Available?', type: 'select', required: false, options: ['Yes', 'No'] },
        { key: 'utilities_available', label: 'Utilities Available', type: 'checkbox', required: false, options: ['Water', 'Electricity', 'Gas', 'Waste Management'] },
        { key: 'zoning_type', label: 'Zoning Type', type: 'select', required: true, options: ['Commercial', 'Industrial', 'Mixed-Use'] },
    ],
    16: [
        { key: 'venue_type', label: 'Venue Type', type: 'select', required: true, options: ['Event Center', 'Conference Hall', 'Co-Working Space', 'Wedding Hall', 'Meeting Room', 'Banquet Hall'] },
        { key: 'size', label: 'Size (sq meters)', type: 'input', required: true },
        { key: 'price', label: 'Price (per Hour/Day)', type: 'input', required: true },
        { key: 'capacity', label: 'Capacity (people)', type: 'input', required: true },
        { key: 'amenities', label: 'Available Amenities', type: 'checkbox', required: false, options: ['Sound System', 'Projector', 'Microphone', 'Air Conditioning', 'Wi-Fi', 'Parking', 'Catering Services'] },
        { key: 'availability', label: 'Availability', type: 'input', required: false },
        { key: 'event_type', label: 'Event Type Suitable For', type: 'select', required: true, options: ['Corporate', 'Wedding', 'Party', 'Exhibition', 'Concert', 'Workshop'] },
        { key: 'decor_allowed', label: 'Decorations Allowed?', type: 'select', required: true, options: ['Yes', 'No'] },
        { key: 'security', label: 'Security Available?', type: 'select', required: false, options: ['Yes', 'No'] },
    ],
    17: [
        { key: 'property_type', label: 'Property Type', type: 'select', required: true, options: ['Apartment', 'House', 'Condo', 'Studio', 'Villa', 'Cottage'] },
        { key: 'size', label: 'Size (sq meters)', type: 'input', required: true },
        { key: 'price_per_night', label: 'Price (per Night)', type: 'input', required: true },
        { key: 'availability', label: 'Availability Dates', type: 'input', required: true },
        { key: 'bedrooms', label: 'Number of Bedrooms', type: 'input', required: true },
        { key: 'bathrooms', label: 'Number of Bathrooms', type: 'input', required: true },
        { key: 'guests', label: 'Maximum Guests', type: 'input', required: true },
        { key: 'amenities', label: 'Available Amenities', type: 'checkbox', required: false, options: ['Wi-Fi', 'Swimming Pool', 'Gym', 'Air Conditioning', 'Heating', 'Parking', 'Kitchen', 'TV', 'Washer/Dryer', 'Hot Tub'] },
        { key: 'pets_allowed', label: 'Pets Allowed?', type: 'select', required: false, options: ['Yes', 'No'] },
        { key: 'security', label: 'Security Available?', type: 'select', required: false, options: ['Yes', 'No'] },
    ],
    18: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Apple', 'Samsung', 'Nokia', 'Huawei', 'Sony', 'LG', 'Xiaomi', 'Oppo', 'Realme', 'OnePlus'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'storage', label: 'Storage', type: 'select', required: true, options: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB'] },
        { key: 'ram', label: 'RAM', type: 'select', required: true, options: ['2GB', '4GB', '6GB', '8GB', '12GB'] },
        { key: 'screen_size', label: 'Screen Size', type: 'select', required: true, options: ['5.0"', '5.5"', '6.0"', '6.5"', '6.8"'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Gold', 'Blue', 'Red', 'Pink', 'Silver'] },
        { key: 'os', label: 'Operating System', type: 'select', required: true, options: ['iOS', 'Android'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
        { key: 'network', label: 'Network Type', type: 'select', required: true, options: ['4G', '5G', '3G'] },
        { key: 'battery_capacity', label: 'Battery Capacity', type: 'input', required: true },
        { key: 'features', label: 'Special Features', type: 'checkbox', required: false, options: ['Fingerprint Scanner', 'Face Unlock', 'Wireless Charging', 'Dual SIM', 'Fast Charging', 'Water Resistant'] },
    ],
    19: [
        { key: 'accessory_type', label: 'Accessory Type', type: 'select', required: true, options: ['Phone Case', 'Screen Protector', 'Charger', 'Headphones', 'Power Bank', 'Bluetooth Speaker', 'Phone Stand', 'Car Mount', 'Memory Card', 'Charging Cable'] },
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Apple', 'Samsung', 'Anker', 'Xiaomi', 'Sony', 'Baseus', 'Ugreen', 'Spigen', 'OtterBox', 'Belkin'] },
        { key: 'compatibility', label: 'Compatibility', type: 'select', required: true, options: ['iPhone', 'Samsung Galaxy', 'Huawei', 'Xiaomi', 'Other Android Phones', 'iPad', 'Other Tablets'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Blue', 'Red', 'Green', 'Transparent', 'Pink', 'Gold', 'Silver'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
        { key: 'quantity', label: 'Quantity Available', type: 'input', required: true },
    ],
    20: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Apple', 'Samsung', 'Garmin', 'Fitbit', 'Huawei', 'Amazfit', 'Xiaomi', 'Fossil', 'Suunto', 'Withings'] },
        { key: 'model', label: 'Model', type: 'select', required: true, dependsOn: 'brand', options: [] },  // Model depends on brand
        { key: 'features', label: 'Features', type: 'checkbox', required: true, options: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking', 'Fitness Tracking', 'Bluetooth', 'Blood Oxygen Monitoring', 'NFC Payment', 'Music Storage'] },
        { key: 'battery_life', label: 'Battery Life', type: 'input', required: true },
        { key: 'screen_size', label: 'Screen Size', type: 'select', required: true, options: ['1.0"', '1.2"', '1.4"', '1.5"', '1.7"'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Silver', 'Gold', 'Pink', 'Blue', 'Green', 'Purple'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    21: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Apple', 'Samsung', 'Huawei', 'Lenovo', 'Microsoft', 'Xiaomi', 'Amazon', 'Google'] },
        { key: 'model', label: 'Model', type: 'select', required: true, dependsOn: 'brand', options: [] },  // Model depends on brand
        { key: 'storage', label: 'Storage', type: 'select', required: true, options: ['16GB', '32GB', '64GB', '128GB', '256GB', '512GB'] },
        { key: 'ram', label: 'RAM', type: 'select', required: true, options: ['2GB', '4GB', '6GB', '8GB'] },
        { key: 'screen_size', label: 'Screen Size', type: 'select', required: true, options: ['7.0"', '8.0"', '10.1"', '12.9"'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Silver', 'Gold', 'Space Gray', 'Rose Gold'] },
        { key: 'os', label: 'Operating System', type: 'select', required: true, options: ['iOS', 'Android', 'Windows'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    22: [
        { key: 'accessory_type', label: 'Accessory Type', type: 'select', required: true, options: ['Cables & Adapters', 'Chargers', 'Power Banks', 'Headphones', 'Speakers', 'Screen Protectors', 'Cases & Covers', 'Stands & Mounts', 'Memory Cards', 'Batteries'] },
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Apple', 'Samsung', 'Sony', 'Anker', 'Bose', 'JBL', 'Baseus', 'Ugreen', 'Belkin', 'Spigen'] },
        { key: 'compatibility', label: 'Compatibility', type: 'select', required: true, options: ['iPhone', 'Android Phones', 'iPad', 'Laptops', 'Tablets', 'PCs', 'Other'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Blue', 'Red', 'Green', 'Pink', 'Gold', 'Silver', 'Transparent'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
        { key: 'quantity', label: 'Quantity Available', type: 'input', required: true },
    ],
    23: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Apple', 'Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'Microsoft', 'Samsung', 'Razer', 'MSI'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'processor', label: 'Processor', type: 'select', required: true, options: ['Intel i3', 'Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 3', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9'] },
        { key: 'ram', label: 'RAM', type: 'select', required: true, options: ['4GB', '8GB', '16GB', '32GB'] },
        { key: 'storage', label: 'Storage', type: 'select', required: true, options: ['256GB SSD', '512GB SSD', '1TB HDD', '1TB SSD', '2TB HDD'] },
        { key: 'screen_size', label: 'Screen Size', type: 'select', required: true, options: ['13.3"', '14"', '15.6"', '17.3"'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'Silver', 'Gray', 'White', 'Blue', 'Gold'] },
        { key: 'os', label: 'Operating System', type: 'select', required: true, options: ['Windows 10', 'Windows 11', 'macOS', 'Linux'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    24: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Samsung', 'LG', 'Sony', 'Panasonic', 'Hisense', 'TCL', 'Sharp', 'Vizio', 'JVC', 'Philips'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'type', label: 'Type', type: 'select', required: true, options: ['LED', 'LCD', 'OLED', 'Plasma', 'QLED', 'Smart TV', '4K TV'] },
        { key: 'screen_size', label: 'Screen Size', type: 'select', required: true, options: ['32"', '43"', '50"', '55"', '65"', '75"', '85"'] },
        { key: 'resolution', label: 'Resolution', type: 'select', required: true, options: ['HD', 'Full HD', '4K', '8K'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    25: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Sony', 'Bose', 'Sennheiser', 'Beats', 'JBL', 'Marshall', 'Audio-Technica', 'Samsung', 'LG', 'Harman Kardon'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'type', label: 'Type', type: 'select', required: true, options: ['Headphones', 'Earphones', 'Speakers', 'Soundbars', 'Microphones', 'Amplifiers'] },
        { key: 'connectivity', label: 'Connectivity', type: 'select', required: true, options: ['Wired', 'Wireless', 'Bluetooth', 'Wi-Fi'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Blue', 'Red', 'Silver', 'Gold', 'Pink'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    26: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Logitech', 'Razer', 'Corsair', 'Microsoft', 'SteelSeries', 'HP', 'Lenovo', 'Dell', 'Acer', 'Anker'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'type', label: 'Type', type: 'select', required: true, options: ['Mouse', 'Keyboard', 'Headset', 'Monitor', 'Mousepad', 'External Storage', 'Webcam', 'Laptop Stand', 'Docking Station', 'Cable'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Gray', 'Blue', 'Red', 'Silver', 'Pink'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    27: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Intel', 'AMD', 'NVIDIA', 'Corsair', 'Kingston', 'Western Digital', 'Seagate', 'EVGA', 'Asus', 'Gigabyte'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'type', label: 'Type', type: 'select', required: true, options: ['CPU', 'GPU', 'Motherboard', 'RAM', 'Hard Drive', 'SSD', 'Power Supply', 'Graphics Card', 'Cooling System'] },
        { key: 'capacity', label: 'Capacity', type: 'select', required: true, options: ['4GB', '8GB', '16GB', '32GB', '64GB'] },  // For RAM, Hard Drive, SSD, etc.
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    28: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Samsung', 'LG', 'Dell', 'ASUS', 'BenQ', 'HP', 'Acer', 'ViewSonic', 'MSI', 'Philips'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'size', label: 'Screen Size', type: 'select', required: true, options: ['19"', '21"', '23"', '24"', '27"', '32"', '34"', '43"'] },
        { key: 'resolution', label: 'Resolution', type: 'select', required: true, options: ['HD', 'Full HD', 'QHD', '4K', '8K'] },
        { key: 'refresh_rate', label: 'Refresh Rate', type: 'select', required: true, options: ['60Hz', '120Hz', '144Hz', '240Hz'] },
        { key: 'panel_type', label: 'Panel Type', type: 'select', required: true, options: ['IPS', 'LED', 'OLED', 'TN', 'VA'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    29: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['Sony', 'Bose', 'Beats', 'Sennheiser', 'JBL', 'Audio-Technica', 'Skullcandy', 'Bang & Olufsen', 'Philips', 'Marshall'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'type', label: 'Type', type: 'select', required: true, options: ['Over-Ear', 'On-Ear', 'In-Ear', 'True Wireless'] },
        { key: 'color', label: 'Color', type: 'select', required: true, options: ['Black', 'White', 'Red', 'Blue', 'Pink', 'Silver', 'Gold', 'Green'] },
        { key: 'features', label: 'Features', type: 'checkbox', required: true, options: ['Noise Cancelling', 'Bluetooth', 'Waterproof', 'Built-in Microphone', 'Touch Controls'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    30: [
        { key: 'brand', label: 'Brand', type: 'select', required: true, options: ['TP-Link', 'Netgear', 'Linksys', 'D-Link', 'Cisco', 'Ubiquiti', 'ASUS', 'Zyxel', 'Tenda'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', required: true, options: [] },  // Model depends on brand
        { key: 'product_type', label: 'Product Type', type: 'select', required: true, options: ['Router', 'Switch', 'Access Point', 'Modem', 'Network Adapter', 'Range Extender', 'Cables'] },
        { key: 'speed', label: 'Network Speed', type: 'select', required: true, options: ['100 Mbps', '1 Gbps', '10 Gbps'] },
        { key: 'connection_type', label: 'Connection Type', type: 'select', required: true, options: ['Wired', 'Wireless'] },
        { key: 'ports', label: 'Number of Ports', type: 'select', required: true, options: ['1', '2', '4', '8', '16', '24'] },
        { key: 'condition', label: 'Condition', type: 'select', required: true, options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    31: [
        { key: 'brand', label: 'Brand', type: 'select', options: ['Canon', 'Nikon', 'Sony', 'Panasonic', 'Fujifilm', 'Olympus', 'GoPro', 'Leica', 'Kodak'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', options: [] },  // Model depends on brand
        { key: 'camera_type', label: 'Camera Type', type: 'select', options: ['DSLR', 'Mirrorless', 'Point & Shoot', 'Action Camera', 'Camcorder'] },
        { key: 'megapixels', label: 'Megapixels', type: 'select', options: ['12MP', '16MP', '24MP', '36MP', '48MP', '64MP'] },
        { key: 'video_resolution', label: 'Video Resolution', type: 'select', options: ['1080p', '4K', '8K'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    32: [
        { key: 'brand', label: 'Brand', type: 'select', options: ['HP', 'Canon', 'Epson', 'Brother', 'Samsung', 'Lexmark', 'Xerox', 'Ricoh'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', options: [] },  // Model depends on brand
        { key: 'product_type', label: 'Product Type', type: 'select', options: ['Printer', 'Scanner', 'All-in-One'] },
        { key: 'printing_technology', label: 'Printing Technology', type: 'select', options: ['Inkjet', 'Laser', 'Thermal', 'Dot Matrix'] },
        { key: 'print_speed', label: 'Print Speed (ppm)', type: 'input' },
        { key: 'color_printing', label: 'Color Printing', type: 'select', options: ['Yes', 'No'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    33: [
        { key: 'brand', label: 'Brand', type: 'select', options: ['Hikvision', 'Dahua', 'Arlo', 'Ring', 'Nest', 'Xiaomi', 'Lorex', 'Swann'] },
        { key: 'model', label: 'Model', type: 'select', dependsOn: 'brand', options: [] },  // Model depends on brand
        { key: 'camera_type', label: 'Camera Type', type: 'select', options: ['CCTV', 'IP Camera', 'Doorbell Camera', 'Wireless Camera'] },
        { key: 'resolution', label: 'Camera Resolution', type: 'select', options: ['1080p', '4K', '720p'] },
        { key: 'night_vision', label: 'Night Vision', type: 'select', options: ['Yes', 'No'] },
        { key: 'motion_detection', label: 'Motion Detection', type: 'select', options: ['Yes', 'No'] },
        { key: 'storage_type', label: 'Storage Type', type: 'select', options: ['Cloud Storage', 'SD Card', 'NVR'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    34: [
        { key: 'category', label: 'Software Category', type: 'select', options: ['Operating Systems', 'Productivity Software', 'Antivirus Software', 'Graphics Design', 'Video Editing', 'Development Tools', 'Utility Tools'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Microsoft', 'Adobe', 'Apple', 'Norton', 'Kaspersky', 'Bitdefender', 'Corel', 'Autodesk'] },
        { key: 'version', label: 'Version', type: 'input' },
        { key: 'platform', label: 'Platform', type: 'select', options: ['Windows', 'MacOS', 'Linux', 'Android', 'iOS'] },
        { key: 'license_type', label: 'License Type', type: 'select', options: ['Single License', 'Multi-User License', 'Subscription'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used', 'Refurbished'] },
    ],
    35: [
        { key: 'category', label: 'Game Category', type: 'select', options: ['Action', 'Adventure', 'RPG', 'Sports', 'Strategy', 'Simulation', 'Puzzle', 'Fighting', 'Racing'] },
        { key: 'platform', label: 'Platform', type: 'select', options: ['PlayStation', 'Xbox', 'Nintendo Switch', 'PC', 'Mobile'] },
        { key: 'game_title', label: 'Game Title', type: 'input' },
        { key: 'release_date', label: 'Release Date', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
    ],
    36: [
        { key: 'category', label: 'Game Console Category', type: 'select', options: ['PlayStation', 'Xbox', 'Nintendo Switch', 'PC', 'Retro Consoles', 'Other'] },
        { key: 'model', label: 'Console Model', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'accessories_included', label: 'Accessories Included', type: 'checkbox', options: ['Controller', 'Cables', 'Games', 'Headset', 'Stand'] },
    ],
    37: [
        { key: 'category', label: 'Furniture Category', type: 'select', options: ['Sofa', 'Bed', 'Dining Table', 'Chair', 'Cabinet', 'Desk', 'Bookshelf', 'Wardrobe', 'Storage'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Wood', 'Metal', 'Plastic', 'Glass', 'Fabric', 'Leather'] },
        { key: 'color', label: 'Color', type: 'select', options: ['Black', 'White', 'Brown', 'Gray', 'Beige', 'Blue', 'Red', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    38: [
        { key: 'category', label: 'Category', type: 'select', options: ['Plants', 'Seeds', 'Tools', 'Fertilizers', 'Pots & Planters', 'Garden Decor', 'Watering Equipment', 'Lawn Care'] },
        { key: 'type', label: 'Type', type: 'select', options: ['Indoor', 'Outdoor', 'Both'] },
        { key: 'size', label: 'Size', type: 'select', options: ['Small', 'Medium', 'Large'] },
        { key: 'color', label: 'Color', type: 'select', options: ['Green', 'Red', 'Yellow', 'Blue', 'Multicolor', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Plastic', 'Wood', 'Ceramic', 'Metal', 'Clay'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    39: [
        { key: 'category', label: 'Category', type: 'select', options: ['Wall Art', 'Lighting', 'Decorative Cushions', 'Curtains', 'Rugs & Mats', 'Clocks', 'Mirrors', 'Vases', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Wood', 'Metal', 'Glass', 'Fabric', 'Ceramic', 'Plastic', 'Other'] },
        { key: 'color', label: 'Color', type: 'select', options: ['White', 'Black', 'Gold', 'Silver', 'Beige', 'Blue', 'Red', 'Green', 'Multicolor'] },
        { key: 'style', label: 'Style', type: 'select', options: ['Modern', 'Vintage', 'Rustic', 'Industrial', 'Bohemian', 'Minimalist', 'Traditional'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    40: [
        { key: 'category', label: 'Category', type: 'select', options: ['Refrigerators', 'Washing Machines', 'Microwave Ovens', 'Air Conditioners', 'Dishwashers', 'Vacuum Cleaners', 'Fans', 'Water Heaters', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Samsung', 'LG', 'Whirlpool', 'Bosch', 'Haier', 'Panasonic', 'Miele', 'Electrolux', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'energy_efficiency', label: 'Energy Efficiency Rating', type: 'select', options: ['A++', 'A+', 'A', 'B', 'C', 'D', 'Other'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
        { key: 'warranty', label: 'Warranty', type: 'input' },
    ],
    41: [
        { key: 'category', label: 'Category', type: 'select', options: ['Blenders', 'Juicers', 'Coffee Makers', 'Toasters', 'Microwave Ovens', 'Food Processors', 'Electric Kettles', 'Rice Cookers', 'Grills', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Philips', 'Kenwood', 'Hamilton Beach', 'Ninja', 'Black+Decker', 'Breville', 'Panasonic', 'Sharp', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'energy_efficiency', label: 'Energy Efficiency Rating', type: 'select', options: ['A++', 'A+', 'A', 'B', 'C', 'D', 'Other'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
        { key: 'warranty', label: 'Warranty', type: 'input' },
    ],
    42: [
        { key: 'category', label: 'Category', type: 'select', options: ['Cookware', 'Bakeware', 'Tableware', 'Storage Containers', 'Utensils', 'Glassware', 'Cutlery', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Tefal', 'Lodge', 'CorningWare', 'Pyrex', 'Le Creuset', 'Cuisinart', 'KitchenAid', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Stainless Steel', 'Cast Iron', 'Aluminum', 'Non-stick', 'Ceramic', 'Glass', 'Plastic', 'Wood', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
        { key: 'warranty', label: 'Warranty', type: 'input' },
    ],
    43: [
        { key: 'category', label: 'Category', type: 'select', options: ['Cleaning Supplies', 'Laundry Products', 'Insecticides', 'Pest Control', 'Air Fresheners', 'Disinfectants', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Dettol', 'Mr. Clean', 'Clorox', 'Pine-Sol', 'Omo', 'Sunlight', 'Other'] },
        { key: 'chemical_type', label: 'Chemical Type', type: 'select', options: ['Liquid', 'Powder', 'Spray', 'Gel', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'expiration_date', label: 'Expiration Date', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    44: [
        { key: 'category', label: 'Category', type: 'select', options: ['Shampoos', 'Soaps', 'Lotions & Creams', 'Shaving', 'Body Scrubs', 'Deodorants', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Dove', 'Nivea', 'Vaseline', 'Olay', 'Palmolive', 'Other'] },
        { key: 'product_type', label: 'Product Type', type: 'select', options: ['Liquid', 'Bar', 'Cream', 'Gel', 'Spray', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'expiration_date', label: 'Expiration Date', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    45: [
        { key: 'category', label: 'Category', type: 'select', options: ['Perfumes', 'Colognes', 'Body Sprays', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Chanel', 'Dior', 'Gucci', 'Armani', 'Calvin Klein', 'Other'] },
        { key: 'gender', label: 'Gender', type: 'select', options: ['Men', 'Women', 'Unisex'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'fragrance_type', label: 'Fragrance Type', type: 'select', options: ['Floral', 'Citrus', 'Woody', 'Oriental', 'Fresh', 'Other'] },
        { key: 'expiration_date', label: 'Expiration Date', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    46: [
        { key: 'category', label: 'Category', type: 'select', options: ['Shampoos', 'Conditioners', 'Hair Oils', 'Hair Treatments', 'Hair Colors', 'Hair Tools', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['L’Oreal', 'Pantene', 'Dove', 'Garnier', 'Tresemme', 'Other'] },
        { key: 'hair_type', label: 'Hair Type', type: 'select', options: ['Curly', 'Straight', 'Wavy', 'Coarse', 'Fine'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'ingredients', label: 'Key Ingredients', type: 'input' },
        { key: 'scent', label: 'Scent', type: 'input' },
        { key: 'expiry_date', label: 'Expiry Date', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    47: [
        { key: 'category', label: 'Category', type: 'select', options: ['Foundations', 'Lipsticks', 'Eyeliners', 'Mascaras', 'Blushes', 'Eyeshadows', 'Make-Up Sets', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Maybelline', 'MAC', 'L’Oreal', 'Fenty Beauty', 'Revlon', 'Other'] },
        { key: 'skin_type', label: 'Skin Type', type: 'select', options: ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'shade', label: 'Shade', type: 'input' },
        { key: 'ingredients', label: 'Key Ingredients', type: 'input' },
        { key: 'expiry_date', label: 'Expiry Date', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    48: [
        { key: 'category', label: 'Category', type: 'select', options: ['Condoms', 'Lubricants', 'Vibrators', 'Massage Oils', 'Feminine Hygiene', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Durex', 'Lelo', 'Tenga', 'K-Y', 'Other'] },
        { key: 'type', label: 'Product Type', type: 'select', options: ['Water-Based', 'Silicone-Based', 'Oil-Based'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Sealed', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'flavor', label: 'Flavor (if applicable)', type: 'input' },
        { key: 'expiry_date', label: 'Expiry Date', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    49: [
        { key: 'category', label: 'Category', type: 'select', options: ['Face Care', 'Body Care', 'Anti-Aging', 'Acne Care', 'Moisturizers', 'Sunscreens', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Nivea', 'Olay', 'Neutrogena', 'CeraVe', 'L’Oréal', 'Other'] },
        { key: 'skin_type', label: 'Skin Type', type: 'select', options: ['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal'] },
        { key: 'product_type', label: 'Product Type', type: 'select', options: ['Cream', 'Gel', 'Oil', 'Serum', 'Toner', 'Scrub'] },
        { key: 'size', label: 'Size (in ml)', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Sealed', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'expiry_date', label: 'Expiry Date', type: 'input' },
        { key: 'ingredients', label: 'Key Ingredients', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    50: [
        { key: 'category', label: 'Category', type: 'select', options: ['Hookahs', 'Vaporizers', 'Grinders', 'Bongs', 'Pipes', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Smokey', 'Yocan', 'PAX', 'KandyPens', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Glass', 'Metal', 'Wood', 'Plastic', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Sealed', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    51: [
        { key: 'category', label: 'Category', type: 'select', options: ['Hair Tools', 'Nail Tools', 'Makeup Tools', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Remington', 'Philips', 'Braun', 'Conair', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Plastic', 'Metal', 'Ceramic', 'Wood', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'power_source', label: 'Power Source', type: 'select', options: ['Battery Operated', 'Electric', 'Manual'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Sealed', 'Used'] },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    52: [
        { key: 'category', label: 'Category', type: 'select', options: ['Vitamins', 'Minerals', 'Herbal Supplements', 'Protein', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Nature’s Bounty', 'Centrum', 'Now Foods', 'Optimum Nutrition', 'Other'] },
        { key: 'form', label: 'Form', type: 'select', options: ['Tablets', 'Capsules', 'Powder', 'Liquid', 'Gummies'] },
        { key: 'flavor', label: 'Flavor', type: 'input' },
        { key: 'expiration_date', label: 'Expiration Date', type: 'input', placeholder: 'MM/YYYY' },
        { key: 'quantity', label: 'Quantity', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['Brand New', 'Sealed', 'Opened'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    53: [
        { key: 'bag_type', label: 'Bag Type', type: 'select', options: ['Handbag', 'Backpack', 'Messenger Bag', 'Tote Bag', 'Clutch', 'Crossbody', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Louis Vuitton', 'Gucci', 'Nike', 'Adidas', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Leather', 'Canvas', 'Synthetic', 'Suede', 'Nylon', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input', placeholder: 'Small, Medium, Large' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    54: [
        { key: 'clothing_type', label: 'Clothing Type', type: 'select', options: ['T-shirt', 'Shirt', 'Jeans', 'Dress', 'Jacket', 'Sweater', 'Shorts', 'Skirt', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Nike', 'Adidas', 'Zara', 'H&M', 'Levi\'s', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Cotton', 'Polyester', 'Leather', 'Wool', 'Silk', 'Linen', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'select', options: ['Small', 'Medium', 'Large', 'XL', 'XXL', 'One Size'] },
        { key: 'gender', label: 'Gender', type: 'select', options: ['Men', 'Women', 'Unisex'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    55: [
        { key: 'accessory_type', label: 'Accessory Type', type: 'select', options: ['Hat', 'Belt', 'Scarf', 'Gloves', 'Socks', 'Tie', 'Bag', 'Jewelry', 'Watch', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Gucci', 'Chanel', 'Prada', 'Rolex', 'Zara', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Leather', 'Cotton', 'Silk', 'Metal', 'Wood', 'Plastic', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    56: [
        { key: 'jewelry_type', label: 'Jewelry Type', type: 'select', options: ['Necklace', 'Bracelet', 'Ring', 'Earrings', 'Brooch', 'Pendant', 'Watch', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Gold', 'Silver', 'Platinum', 'Diamond', 'Pearl', 'Steel', 'Copper', 'Wood', 'Other'] },
        { key: 'gemstone', label: 'Gemstone', type: 'select', options: ['Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Pearl', 'Amethyst', 'Topaz', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Tiffany', 'Cartier', 'Bvlgari', 'Chopard', 'Rolex', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    57: [
        { key: 'shoe_type', label: 'Shoe Type', type: 'select', options: ['Sneakers', 'Boots', 'Sandals', 'Formal', 'Casual', 'Slippers', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Nike', 'Adidas', 'Puma', 'Reebok', 'Gucci', 'Other'] },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'material', label: 'Material', type: 'select', options: ['Leather', 'Canvas', 'Rubber', 'Synthetic', 'Suede', 'Other'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    58: [
        { key: 'brand', label: 'Brand', type: 'select', options: ['Rolex', 'Casio', 'Fossil', 'Omega', 'Tag Heuer', 'Other'] },
        { key: 'type', label: 'Type', type: 'select', options: ['Analog', 'Digital', 'Smartwatch'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Leather', 'Stainless Steel', 'Rubber', 'Plastic', 'Gold', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'battery', label: 'Battery Life (if smartwatch)', type: 'input' },
        { key: 'water_resistance', label: 'Water Resistance', type: 'select', options: ['Water Resistant', 'Not Water Resistant'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    59: [
        { key: 'type', label: 'Type', type: 'select', options: ['Wedding Dress', 'Bridal Accessories', 'Groom Wear', 'Bridal Shoes', 'Veils', 'Jewelry', 'Other'] },
        { key: 'brand', label: 'Brand', type: 'select', options: ['Custom', 'Designer', 'Other'] },
        { key: 'material', label: 'Material', type: 'select', options: ['Satin', 'Lace', 'Tulle', 'Silk', 'Chiffon', 'Other'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Like New', 'Used'] },
        { key: 'customizations', label: 'Customizations Available', type: 'checkbox', options: ['Yes', 'No'] },
        { key: 'delivery', label: 'Delivery Available', type: 'checkbox', options: ['Yes', 'No'] },
    ],
    60: [
        { key: 'job_type', label: 'Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['B.Sc', 'M.Sc', 'MBA', 'Diploma', 'Professional Certification (e.g., ICAN, ACCA)', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' },
        { key: 'skills', label: 'Skills', type: 'input' },
        { key: 'location', label: 'Preferred Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Month', 'Other'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
    ],
    61: [
        { key: 'job_type', label: 'Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['B.Sc', 'M.Sc', 'Diploma', 'Professional Certification (e.g., CIM, Digital Marketing Certification)', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' },
        { key: 'skills', label: 'Skills', type: 'input' },
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Digital Marketing', 'Content Creation', 'Brand Management', 'Advertising', 'SEO/SEM', 'Social Media Management', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio Link', type: 'input' },
        { key: 'location', label: 'Preferred Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Month', 'Other'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
    ],
    62: [
        { key: 'job_type', label: 'Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['B.A', 'B.Sc', 'M.A', 'M.Sc', 'Diploma', 'Professional Certification (e.g., Acting School, Music Academy)', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' },
        { key: 'skills', label: 'Skills', type: 'input' },
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Acting', 'Music', 'Dance', 'Photography', 'Graphic Design', 'Film Production', 'Comedy', 'Modeling', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Showreel Link', type: 'input' },
        { key: 'location', label: 'Preferred Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Month', 'Other'] },
    ],
    63: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Live-in', 'Live-out', 'Temporary', 'Weekend'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'age_group_experience', label: 'Age Groups Experienced With', type: 'select', options: ['Newborn', 'Toddler (1-3 years)', 'Preschool (3-5 years)', 'School Age (6-12 years)', 'Teenagers (13+)'] },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Secondary School', 'Diploma in Childcare', 'Bachelor\'s Degree', 'First Aid/CPR Certification', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' },
        { key: 'skills', label: 'Key Skills', type: 'input' },
        { key: 'languages', label: 'Languages Spoken', type: 'input' },
        { key: 'special_needs_experience', label: 'Special Needs Experience', type: 'select', options: ['Yes', 'No'] },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Month', 'Flexible'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    64: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Temporary', 'Remote', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma', 'B.Sc', 'M.Sc', 'Professional Certification', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' },
        { key: 'skills', label: 'Key Administrative Skills', type: 'input' },
        { key: 'software_skills', label: 'Software Proficiency', type: 'input' }, // e.g., MS Word, Excel, CRM
        { key: 'languages', label: 'Languages Spoken', type: 'input' },
        { key: 'typing_speed', label: 'Typing Speed (WPM)', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 2 Weeks', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    65: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Remote', 'Contract', 'Freelance'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Diploma', 'B.Sc', 'M.Sc', 'Professional Certification (e.g., Cisco, AWS, Microsoft)', 'Other'] },
        { key: 'certifications', label: 'Technical Certifications', type: 'input' }, // e.g., CompTIA, Cisco, AWS
        { key: 'programming_languages', label: 'Programming Languages', type: 'input' },
        { key: 'technologies', label: 'Technologies/Tools', type: 'input' }, // e.g., React, Node.js, Docker, AWS
        { key: 'skills', label: 'Key IT Skills', type: 'input' },
        { key: 'projects', label: 'Portfolio or Project Links', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 2 Weeks', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    66: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Contract', 'Freelance', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Construction', 'Trade Certification', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., OSHA, First Aid
        { key: 'skills', label: 'Key Construction Skills', type: 'input' }, // e.g., Carpentry, Plumbing, Electrical
        { key: 'specializations', label: 'Specializations', type: 'select', options: ['Carpentry', 'Plumbing', 'Electrical', 'Masonry', 'Welding', 'HVAC', 'Other'] },
        { key: 'tools', label: 'Tools/Equipment Familiar With', type: 'input' }, // e.g., Power tools, Welding equipment
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Month', 'Other'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    67: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Remote'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certification', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., PMP, Six Sigma, Strategy Certifications
        { key: 'skills', label: 'Key Consulting Skills', type: 'input' }, // e.g., Market Research, Financial Analysis, Business Modeling
        { key: 'industries', label: 'Industries Experienced In', type: 'input' }, // e.g., Finance, Healthcare, IT, Manufacturing
        { key: 'languages', label: 'Languages Spoken', type: 'input' },
        { key: 'projects', label: 'Notable Projects or Clients', type: 'input' }, // e.g., Consulting for XYZ Corp, Market research for ABC
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 2 Weeks', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    68: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Remote', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma', 'B.Sc', 'M.Sc', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Customer Service Certification, Communication Skills
        { key: 'skills', label: 'Key Customer Service Skills', type: 'input' }, // e.g., Communication, Problem-solving, Conflict Resolution
        { key: 'languages', label: 'Languages Spoken', type: 'input' },
        { key: 'customer_service_channels', label: 'Customer Service Channels Experienced In', type: 'select', options: ['Phone', 'Email', 'Live Chat', 'In-Person', 'Social Media'] },
        { key: 'crm_tools', label: 'CRM Tools Familiar With', type: 'input' }, // e.g., Salesforce, Zendesk, Freshdesk
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    69: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Contract', 'Freelance', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Driving Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma', 'Other'] },
        { key: 'license_type', label: 'Driver\'s License Type', type: 'select', options: ['Private', 'Commercial', 'Heavy Duty', 'Motorcycle'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Defensive Driving Course, First Aid
        { key: 'vehicle_type', label: 'Vehicle Types Operated', type: 'input' }, // e.g., Sedan, Bus, Truck, Motorcycle
        { key: 'languages', label: 'Languages Spoken', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    70: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Remote'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certification', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., LEED, PMP, PE (Professional Engineer)
        { key: 'skills', label: 'Key Engineering/Architecture Skills', type: 'input' }, // e.g., CAD, Structural Analysis, Project Management
        { key: 'technologies', label: 'Software/Tools Familiar With', type: 'input' }, // e.g., AutoCAD, Revit, SketchUp
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Architecture', 'Structural Engineering', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Project Samples', type: 'input' }, // e.g., links to past projects or designs
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 2 Weeks', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    71: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Agriculture', 'Bachelor\'s Degree', 'Veterinary Science', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Animal Husbandry, Crop Management, Veterinary Certification
        { key: 'skills', label: 'Key Skills in Farming/Veterinary', type: 'input' }, // e.g., Animal Care, Crop Protection, Veterinary Surgery
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Animal Husbandry', 'Crop Farming', 'Veterinary Care', 'Livestock Management', 'Poultry Farming', 'Other'] },
        { key: 'equipment', label: 'Equipment Familiar With', type: 'input' }, // e.g., Tractors, Milking Machines, Veterinary Tools
        { key: 'location', label: 'Preferred Location', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    72: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Horticulture', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Landscape Design, Horticulture, Gardening Courses
        { key: 'skills', label: 'Key Gardening/Landscaping Skills', type: 'input' }, // e.g., Plant Care, Landscape Design, Irrigation Systems
        { key: 'tools', label: 'Tools Familiar With', type: 'input' }, // e.g., Lawn Mowers, Pruning Shears, Landscape Equipment
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Landscape Design', 'Plant Care', 'Hardscaping', 'Irrigation Systems', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Project Samples', type: 'input' }, // e.g., links to past landscaping projects or garden designs
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    73: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Beauty Therapy', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Cosmetology, Skin Care, Massage Therapy
        { key: 'skills', label: 'Key Health & Beauty Skills', type: 'input' }, // e.g., Hair Styling, Makeup Application, Skin Care, Massage Techniques
        { key: 'tools', label: 'Tools Familiar With', type: 'input' }, // e.g., Hair Dryers, Makeup Kits, Beauty Equipment
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Hair Styling', 'Makeup Artistry', 'Nail Care', 'Skin Care', 'Massage Therapy', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to past beauty treatments or salon work
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    74: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Nursing Diploma', 'Bachelor\'s Degree in Nursing', 'Master\'s Degree in Nursing', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., RN (Registered Nurse), BLS (Basic Life Support), CPR
        { key: 'skills', label: 'Key Healthcare & Nursing Skills', type: 'input' }, // e.g., Patient Care, IV Insertion, Wound Care, Medical Record Keeping
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['General Nursing', 'Pediatric Nursing', 'Geriatric Nursing', 'Surgical Nursing', 'Other'] },
        { key: 'clinical_experience', label: 'Clinical Experience', type: 'input' }, // e.g., hospitals, clinics, home care, etc.
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to relevant healthcare projects, certifications, or recommendations
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    75: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Hospitality', 'Bachelor\'s Degree in Hospitality Management', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Hospitality Management, Customer Service, Food Safety
        { key: 'skills', label: 'Key Hospitality Skills', type: 'input' }, // e.g., Customer Service, Front Desk Operations, Event Planning, Housekeeping
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Receptionist', 'Chef', 'Housekeeping', 'Event Planner', 'Bartender', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to previous hospitality work, event planning, or restaurant menus
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    76: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Cleaning Services', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Cleaning Certification, Safety Training, Hospitality Housekeeping
        { key: 'skills', label: 'Key Housekeeping & Cleaning Skills', type: 'input' }, // e.g., Floor Care, Disinfection, Window Cleaning, Deep Cleaning
        { key: 'tools', label: 'Tools Familiar With', type: 'input' }, // e.g., Cleaning Equipment, Vacuum Cleaners, Steam Cleaners, Floor Scrubbers
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Residential Cleaning', 'Commercial Cleaning', 'Post-Construction Cleaning', 'Move-In/Move-Out Cleaning', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to cleaning service reviews, before and after photos
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    77: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Bachelor\'s Degree in HR', 'Master\'s Degree in HR', 'Diploma in HR Management', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., SHRM (Society for Human Resource Management), HRCI (Human Resource Certification Institute)
        { key: 'skills', label: 'Key HR Skills', type: 'input' }, // e.g., Recruitment, Employee Relations, Payroll Management, Conflict Resolution
        { key: 'tools', label: 'HR Tools Familiar With', type: 'input' }, // e.g., HR Software, Payroll Systems, Recruitment Platforms
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Recruitment', 'Employee Relations', 'Training and Development', 'Compensation and Benefits', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to HR case studies, training programs, or success stories
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    78: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Internship'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Current Education Level', type: 'select', options: ['High School', 'Undergraduate', 'Postgraduate'] },
        { key: 'skills', label: 'Key Skills', type: 'input' }, // e.g., Microsoft Office, Communication, Time Management, Research Skills
        { key: 'projects', label: 'Relevant Projects', type: 'input' }, // e.g., academic projects, personal projects, or volunteer work related to the desired field
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Online Courses, Workshops, Industry Certifications
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to personal projects, coding repositories, or creative works
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Stipend (₦)', type: 'input' },
    ],
    79: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Internship'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['Bachelor of Laws (LL.B)', 'Juris Doctor (JD)', 'Master of Laws (LL.M)', 'Doctor of Juridical Science (S.J.D.)', 'Other'] },
        { key: 'certifications', label: 'Legal Certifications & Bar Admission', type: 'input' }, // e.g., Bar Admission, Legal Practice Course (LPC), Solicitor's Qualification
        { key: 'skills', label: 'Key Legal Skills', type: 'input' }, // e.g., Contract Drafting, Litigation, Negotiation, Legal Research
        { key: 'specializations', label: 'Legal Specialization', type: 'select', options: ['Corporate Law', 'Criminal Law', 'Family Law', 'Intellectual Property', 'Real Estate', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., case studies, legal writings, or trial results (if applicable)
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    80: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract', 'Temporary'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Diploma in Logistics', 'Bachelor\'s Degree in Transport Management', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Transport Manager Certification, Forklift Operator Certification, Safety Training
        { key: 'skills', label: 'Key Logistics & Transport Skills', type: 'input' }, // e.g., Route Planning, Freight Management, Vehicle Maintenance, Supply Chain Coordination
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Supply Chain Management', 'Freight and Cargo', 'Fleet Management', 'Transportation Safety', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., links to logistics management projects, reports, or safety certifications
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    81: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['B.A', 'B.Sc', 'M.A', 'M.Sc', 'MBA', 'Other'] },
        { key: 'certifications', label: 'Management Certifications', type: 'input' }, // e.g., PMP, Six Sigma, Leadership Programs
        { key: 'skills', label: 'Key Management Skills', type: 'input' }, // e.g., Strategic Planning, Budget Management, Team Leadership, Conflict Resolution
        { key: 'specializations', label: 'Management Specialization', type: 'select', options: ['Project Management', 'Operations Management', 'People Management', 'Product Management', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., reports, case studies, or successful project outcomes
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    82: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Vocational Training', 'Other'] },
        { key: 'certifications', label: 'Relevant Certifications', type: 'input' }, // e.g., Safety Certifications, Forklift Operation, Manual Handling
        { key: 'skills', label: 'Manual Labour Skills', type: 'input' }, // e.g., Physical Endurance, Tool Handling, Heavy Lifting, Safety Awareness
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Construction', 'Warehousing', 'Cleaning', 'Packaging', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., past work experience or references
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    83: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Vocational Training', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Manufacturing Certifications', type: 'input' }, // e.g., Safety Certifications, Machine Operation, Lean Manufacturing
        { key: 'skills', label: 'Manufacturing Skills', type: 'input' }, // e.g., Machine Operation, Assembly Line Management, Quality Control, Safety Practices
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Production Line', 'Assembly', 'Quality Control', 'Maintenance', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., examples of production work or quality control reports
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    84: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Vocational Training', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Mining Certifications', type: 'input' }, // e.g., Mining Safety, Heavy Equipment Operation, Hazardous Materials Handling
        { key: 'skills', label: 'Mining Industry Skills', type: 'input' }, // e.g., Mining Operations, Equipment Operation, Excavation, Safety Practices
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Underground Mining', 'Surface Mining', 'Exploration', 'Mineral Processing', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., past mining projects, safety records, certifications
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    85: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Office Certifications', type: 'input' }, // e.g., Microsoft Office Specialist, Project Management, Admin Certifications
        { key: 'skills', label: 'Office Skills', type: 'input' }, // e.g., Data Entry, Office Management, Scheduling, Communication, Customer Service
        { key: 'specializations', label: 'Specialization', type: 'select', options: ['Administrative Assistant', 'Office Manager', 'Receptionist', 'Data Entry', 'Other'] },
        { key: 'portfolio_link', label: 'Portfolio/Work Samples', type: 'input' }, // e.g., examples of office tasks, administrative work, or organizational work
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Monthly Salary (₦)', type: 'input' },
    ],
    86: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // Optional depending on the type of part-time job
        { key: 'skills', label: 'Relevant Skills', type: 'input' }, // Could include customer service, retail, delivery, etc.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Weekdays', 'Weekends', 'Evenings', 'Flexible'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Hourly Salary (₦)', type: 'input' },
    ],
    87: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Six Sigma, Quality Auditor Certification, ISO Certifications
        { key: 'skills', label: 'Quality Control Skills', type: 'input' }, // e.g., Auditing, Statistical Analysis, Problem Solving, Quality Testing
        { key: 'quality_methodologies', label: 'Quality Methodologies', type: 'select', options: ['Six Sigma', 'Lean Manufacturing', 'Total Quality Management (TQM)', 'ISO 9001', 'Other'] },
        { key: 'tools_and_software', label: 'Tools/Software Proficiency', type: 'input' }, // e.g., Minitab, Excel for data analysis, SPSS, JIRA for project tracking
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    88: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Research Methodology, Survey Design, Data Analysis
        { key: 'skills', label: 'Research & Survey Skills', type: 'input' }, // e.g., Data Collection, Statistical Analysis, Report Writing, Questionnaire Design
        { key: 'methodologies', label: 'Research Methodologies', type: 'select', options: ['Qualitative', 'Quantitative', 'Mixed Methods', 'Other'] },
        { key: 'tools_and_software', label: 'Research Tools/Software', type: 'input' }, // e.g., SPSS, NVivo, SurveyMonkey, R, Excel
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    89: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Food Safety, Bartender Certification, Customer Service Training
        { key: 'skills', label: 'Restaurant & Bar Skills', type: 'input' }, // e.g., Customer Service, Barista, Cocktail Mixing, Waitstaff, Bartending
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Bartender', 'Waitstaff', 'Cook', 'Chef', 'Host/Hostess', 'Barista', 'Other'] },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    90: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Retail Sales, Customer Service Training, POS System Training
        { key: 'skills', label: 'Retail Skills', type: 'input' }, // e.g., Sales, Customer Service, Merchandising, Inventory Management, Cash Handling
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Sales Associate', 'Cashier', 'Store Manager', 'Visual Merchandiser', 'Inventory Specialist', 'Other'] },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    91: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Sales Training, Telemarketing Certification, CRM Software Training
        { key: 'skills', label: 'Sales & Telemarketing Skills', type: 'input' }, // e.g., Cold Calling, Negotiation, Lead Generation, Customer Relationship Management
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Outbound Sales', 'Inbound Sales', 'Lead Generation', 'Telemarketing', 'Account Management', 'Other'] },
        { key: 'sales_target', label: 'Sales Target Experience', type: 'input' }, // e.g., experience with meeting monthly/quarterly sales goals
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    92: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Security Guard License, First Aid/CPR, Fire Safety
        { key: 'skills', label: 'Security Skills', type: 'input' }, // e.g., Surveillance, Emergency Response, Access Control, Incident Reporting
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Surveillance', 'Patrolling', 'Event Security', 'Crowd Control', 'Armed Security', 'Unarmed Security', 'Other'] },
        { key: 'security_clearance', label: 'Security Clearance Level', type: 'select', options: ['None', 'Basic', 'Top Secret'] }, // If applicable
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    93: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Coaching Certification, First Aid/CPR
        { key: 'skills', label: 'Sports Skills', type: 'input' }, // e.g., Coaching, Team Management, Physical Training, Sports Strategy
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Football', 'Basketball', 'Tennis', 'Swimming', 'Track & Field', 'Other'] },
        { key: 'team_experience', label: 'Team Experience', type: 'input' }, // Experience in managing or participating in teams
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    94: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Teaching License, Education Degree, Specialized Certifications
        { key: 'skills', label: 'Teaching Skills', type: 'input' }, // e.g., Lesson Planning, Classroom Management, Subject Knowledge
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Mathematics', 'Science', 'Literature', 'History', 'Music', 'Arts', 'Physical Education', 'Other'] },
        { key: 'teaching_experience', label: 'Teaching Experience', type: 'input' }, // Years of experience teaching the specific subject
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    95: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., AWS, Google Cloud, Microsoft Certified, etc.
        { key: 'skills', label: 'Technical Skills', type: 'input' }, // e.g., Programming Languages, DevOps, Database Management, etc.
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Software Development', 'Data Science', 'Cloud Computing', 'Cybersecurity', 'AI/ML', 'Networking', 'Other'] },
        { key: 'projects', label: 'Projects', type: 'input' }, // Showcase notable tech projects (e.g., web apps, machine learning models)
        { key: 'tools', label: 'Tools & Technologies', type: 'input' }, // e.g., Git, Docker, Kubernetes, React, Node.js, etc.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    96: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // e.g., Travel Agent Certification, Tourism Management, etc.
        { key: 'skills', label: 'Skills', type: 'input' }, // e.g., Customer Service, Travel Planning, Event Coordination, Foreign Languages
        { key: 'specialization', label: 'Specialization', type: 'select', options: ['Tour Guide', 'Travel Agent', 'Event Coordinator', 'Hotel Management', 'Tourism Marketing', 'Other'] },
        { key: 'languages', label: 'Languages Spoken', type: 'input' }, // Highlight any foreign language skills.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    97: [
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-Time', 'Part-Time', 'Freelance', 'Contract'] },
        { key: 'position', label: 'Position Desired', type: 'input' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'education', label: 'Highest Education Level', type: 'select', options: ['High School', 'Associate\'s Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Other'] },
        { key: 'certifications', label: 'Certifications', type: 'input' },
        { key: 'skills', label: 'Skills', type: 'input' },
        { key: 'specialization', label: 'Specialization', type: 'input' }, // Since it's "Other CVs", this could be more flexible.
        { key: 'portfolio_link', label: 'Portfolio Link', type: 'input' }, // Optional, for candidates showcasing any personal work.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'preferred_location', label: 'Preferred Work Location', type: 'input' },
        { key: 'expected_salary', label: 'Expected Salary (₦)', type: 'input' },
    ],
    98: [
        { key: 'service_type', label: 'Service Type', type: 'select', options: ['Repair', 'Maintenance', 'Installation', 'Customization'] },
        { key: 'vehicle_type', label: 'Vehicle Type', type: 'select', options: ['Car', 'Truck', 'Motorcycle', 'Other'] },
        { key: 'years_of_experience', label: 'Years of Experience', type: 'input' },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // E.g., ASE Certification, Mechanics Certification, etc.
        { key: 'skills', label: 'Skills', type: 'input' }, // Skills related to automotive work like diagnostics, engine repair, etc.
        { key: 'location', label: 'Service Location', type: 'input' }, // Where the service is available, such as city or specific area.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // The cost of the service or range for the service.
        { key: 'portfolio_link', label: 'Portfolio/Previous Work Link', type: 'input' }, // Optional for showcasing past work (e.g., before/after photos).
    ],
    99: [
        { key: 'service_type', label: 'Service Type', type: 'select', options: ['Construction', 'Renovation', 'Repair', 'Custom Build'] },
        { key: 'trade_specialization', label: 'Trade Specialization', type: 'select', options: ['Plumbing', 'Electrical', 'Masonry', 'Carpentry', 'Painting', 'Roofing', 'Other'] },
        { key: 'years_of_experience', label: 'Years of Experience', type: 'input' },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // Relevant certifications like electrical, plumbing, etc.
        { key: 'skills', label: 'Skills', type: 'input' }, // Specific skills related to building and trade services.
        { key: 'location', label: 'Service Location', type: 'input' }, // Where the service is available, such as city or specific area.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // The cost or price range for the service.
        { key: 'portfolio_link', label: 'Portfolio/Previous Work Link', type: 'input' }, // Optional, for showcasing past projects or work.
    ],
    100: [
        { key: 'service_type', label: 'Service Type', type: 'select', options: ['Chauffeur Service', 'Airport Transfer', 'Corporate Transport', 'Private Hire'] },
        { key: 'vehicle_type', label: 'Vehicle Type', type: 'select', options: ['Sedan', 'SUV', 'Minivan', 'Luxury Car', 'Bus', 'Other'] },
        { key: 'years_of_experience', label: 'Years of Experience', type: 'input' },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // Relevant driving or transport certifications, if any.
        { key: 'location', label: 'Service Location', type: 'input' }, // Where the service is available, such as specific airport or city.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // The cost of the service or a price range.
        { key: 'portfolio_link', label: 'Portfolio/Previous Work Link', type: 'input' }, // Optional for providing customer reviews or testimonials.
        { key: 'estimated_trip_time', label: 'Estimated Trip Time (hrs)', type: 'input' }, // Estimated time for a typical trip or airport transfer.
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // For example, child seats, specific vehicle requests, etc.
    ],
    101: [
        { key: 'service_type', label: 'Service Type', type: 'select', options: ['Babysitting', 'Tutoring', 'Daycare', 'Nanny Services', 'Special Needs Care', 'Other'] },
        { key: 'age_group', label: 'Age Group', type: 'select', options: ['Infants (0-2)', 'Toddlers (3-5)', 'Children (6-12)', 'Teens (13-17)', 'Other'] },
        { key: 'years_of_experience', label: 'Years of Experience', type: 'input' },
        { key: 'certifications', label: 'Certifications', type: 'input' }, // Relevant certifications like child care, first aid, teaching certifications.
        { key: 'skills', label: 'Skills', type: 'input' }, // Specific skills such as CPR, child psychology, special needs education, etc.
        { key: 'location', label: 'Service Location', type: 'input' }, // Where the service is available, e.g., city or neighborhood.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Full-time', 'Part-time', 'Weekends', 'Evenings'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // The cost of the service or a price range.
        { key: 'portfolio_link', label: 'Portfolio/Previous Work Link', type: 'input' }, // Optionally add references or reviews.
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // For example, language skills, dietary preferences, etc.
    ],
    102: [
        { key: 'course_type', label: 'Course Type', type: 'select', options: ['Online', 'In-Person', 'Hybrid'] },
        { key: 'subject', label: 'Subject', type: 'select', options: ['Math', 'Science', 'Language', 'Technology', 'Business', 'Art', 'Music', 'Other'] },
        { key: 'level', label: 'Course Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
        { key: 'duration', label: 'Course Duration', type: 'input' }, // Duration of the course, e.g., 1 week, 3 months, etc.
        { key: 'instructor_name', label: 'Instructor Name', type: 'input' },
        { key: 'certification', label: 'Certification Available', type: 'select', options: ['Yes', 'No'] }, // Whether the course offers a certificate upon completion.
        { key: 'location', label: 'Location', type: 'input' }, // For in-person classes, specify the location.
        { key: 'schedule', label: 'Class Schedule', type: 'input' }, // Days and times when the class is available.
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' },
        { key: 'contact_info', label: 'Contact Information', type: 'input' },
        { key: 'enrollment_link', label: 'Enrollment Link', type: 'input' }, // A link to enroll in the course.
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // For example, tutoring materials, private lessons, etc.
    ],
    103: [
        { key: 'service_type', label: 'Service Type', type: 'select', options: ['Home Cleaning', 'Office Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Post-construction Cleaning', 'Other'] },
        { key: 'cleaning_duration', label: 'Cleaning Duration', type: 'input' }, // Duration of the cleaning service, e.g., 1 hour, 2 hours.
        { key: 'cleaning_frequency', label: 'Cleaning Frequency', type: 'select', options: ['One-time', 'Daily', 'Weekly', 'Monthly'] },
        { key: 'equipment_supplied', label: 'Equipment Supplied', type: 'select', options: ['Yes', 'No'] }, // Whether the service provider supplies the necessary cleaning equipment.
        { key: 'cleaning_agents', label: 'Cleaning Agents Used', type: 'input' }, // Information on the cleaning products used, especially if eco-friendly.
        { key: 'location', label: 'Location', type: 'input' }, // The location where the cleaning will take place.
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // Price estimation for the service.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details of the cleaning service provider.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 24 hours', 'Other'] },
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // For example, specific cleaning needs or allergies to certain products.
    ],
    104: [
        { key: 'service_type', label: 'Service Type', type: 'select', options: ['Computer Repair', 'Network Setup', 'Software Installation', 'Virus Removal', 'Data Recovery', 'IT Consultation', 'Other'] },
        { key: 'device_type', label: 'Device Type', type: 'select', options: ['Laptop', 'Desktop', 'Server', 'Mobile Device', 'Other'] },
        { key: 'operating_system', label: 'Operating System', type: 'select', options: ['Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Other'] },
        { key: 'service_duration', label: 'Estimated Service Duration', type: 'input' }, // Time estimate for service completion.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 24 hours', 'Other'] },
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // The estimated cost of the service.
        { key: 'location', label: 'Location', type: 'input' }, // The location where the service will be provided.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details for reaching the IT service provider.
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // Any specific requirements or customizations for the IT service.
        { key: 'equipment_needed', label: 'Equipment Needed', type: 'input' }, // For example, special tools, software, or hardware.
    ],
    105: [
        { key: 'event_type', label: 'Event Type', type: 'select', options: ['Wedding', 'Birthday Party', 'Corporate Event', 'Club/Bar', 'Private Party', 'Other'] },
        { key: 'service_duration', label: 'Service Duration (hours)', type: 'input' }, // Length of time the DJ service is needed.
        { key: 'equipment_needed', label: 'Equipment Needed', type: 'input' }, // For example, sound system, lighting, etc.
        { key: 'genre_preference', label: 'Preferred Music Genre', type: 'select', options: ['Pop', 'Hip-Hop', 'R&B', 'Rock', 'Electronic', 'Afrobeat', 'Other'] },
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // Any special requests for the event (e.g., specific songs or styles).
        { key: 'price_range', label: 'Price Range (₦)', type: 'input' }, // The estimated cost of the DJ service.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Other'] },
        { key: 'location', label: 'Event Location', type: 'input' }, // Location where the DJ service is required.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details for the DJ service provider.
        { key: 'experience', label: 'DJ Experience Level', type: 'select', options: ['Beginner', 'Intermediate', 'Professional'] },
        { key: 'reviews', label: 'Customer Reviews', type: 'input' }, // Option for users to input or view reviews from previous events.
    ],
    106: [
        { key: 'training_type', label: 'Type of Training', type: 'select', options: ['Personal Training', 'Group Classes', 'Yoga', 'Pilates', 'Weight Loss', 'Strength Training', 'Other'] },
        { key: 'experience', label: 'Trainer Experience', type: 'select', options: ['Beginner', 'Intermediate', 'Expert'] },
        { key: 'training_duration', label: 'Session Duration (hours)', type: 'input' }, // Duration of each session.
        { key: 'fitness_level', label: 'Client Fitness Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
        { key: 'goals', label: 'Fitness Goals', type: 'input' }, // User’s specific fitness goals (e.g., weight loss, muscle gain).
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Other'] },
        { key: 'price_per_session', label: 'Price Per Session (₦)', type: 'input' }, // Price for each session.
        { key: 'location', label: 'Training Location', type: 'input' }, // Location where the fitness service is provided.
        { key: 'certifications', label: 'Trainer Certifications', type: 'input' }, // Any certifications the trainer holds.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details for the personal trainer.
    ],
    107: [
        { key: 'service_type', label: 'Type of Service', type: 'select', options: ['Hair Styling', 'Makeup', 'Skin Care', 'Nail Care', 'Massage', 'Facials', 'Other'] },
        { key: 'experience', label: 'Service Provider Experience', type: 'select', options: ['Beginner', 'Intermediate', 'Expert'] },
        { key: 'service_duration', label: 'Service Duration (hours)', type: 'input' }, // Duration of the service session.
        { key: 'price', label: 'Service Price (₦)', type: 'input' }, // Price for each service.
        { key: 'location', label: 'Service Location', type: 'input' }, // Location where the health & beauty service is provided.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Other'] },
        { key: 'special_offers', label: 'Special Offers', type: 'input' }, // Any ongoing promotions or discounts.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details for the service provider.
    ],
    108: [
        { key: 'service_type', label: 'Type of Service', type: 'select', options: ['Lawn Care', 'Garden Design', 'Tree Cutting', 'Fertilizing', 'Irrigation System Installation', 'Other'] },
        { key: 'experience', label: 'Service Provider Experience', type: 'select', options: ['Beginner', 'Intermediate', 'Expert'] },
        { key: 'service_duration', label: 'Service Duration (hours)', type: 'input' }, // Duration of the service session.
        { key: 'price', label: 'Service Price (₦)', type: 'input' }, // Price for each service.
        { key: 'location', label: 'Service Location', type: 'input' }, // Location where the landscaping & gardening service is provided.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Other'] },
        { key: 'special_offers', label: 'Special Offers', type: 'input' }, // Any ongoing promotions or discounts.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details for the service provider.
    ],
    109: [
        { key: 'service_type', label: 'Type of Legal Service', type: 'select', options: ['Consultation', 'Contract Drafting', 'Legal Advice', 'Representation', 'Notary Services', 'Other'] },
        { key: 'experience', label: 'Lawyer Experience', type: 'select', options: ['Beginner', 'Intermediate', 'Expert'] },
        { key: 'specialization', label: 'Area of Legal Specialization', type: 'select', options: ['Family Law', 'Corporate Law', 'Criminal Law', 'Property Law', 'Intellectual Property', 'Other'] },
        { key: 'price', label: 'Service Price (₦)', type: 'input' }, // Price for the legal services.
        { key: 'location', label: 'Service Location', type: 'input' }, // Location where legal services are provided.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Other'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details for the service provider.
        { key: 'special_offers', label: 'Special Offers', type: 'input' }, // Any ongoing promotions or discounts.
        { key: 'credentials', label: 'Lawyer Credentials', type: 'input' } // Details of the lawyer's qualifications and certifications.
    ],
    110: [
        { key: 'service_type', label: 'Type of Logistics Service', type: 'select', options: ['Transportation', 'Storage', 'Removals', 'Courier', 'Packing', 'Other'] },
        { key: 'vehicle_type', label: 'Vehicle Type', type: 'select', options: ['Van', 'Truck', 'Lorry', 'Motorbike', 'Other'] },
        { key: 'service_area', label: 'Service Area', type: 'input' }, // Location where the logistics service is offered.
        { key: 'price', label: 'Service Price (₦)', type: 'input' }, // Pricing for different logistics services.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Immediately', 'Within 1 Week', 'Within 1 Month', 'Other'] },
        { key: 'storage_capacity', label: 'Storage Capacity (m³)', type: 'input' }, // Storage space available for removals and storage services.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details of the service provider.
        { key: 'special_offers', label: 'Special Offers', type: 'input' }, // Any discounts or special promotions for logistics services.
        { key: 'insurance', label: 'Insurance Options', type: 'select', options: ['Yes', 'No', 'Available upon request'] }
    ],
    111: [
        { key: 'service_type', label: 'Type of Manufacturing Service', type: 'select', options: ['Custom Production', 'Assembly', 'Prototyping', 'Mass Production', 'Contract Manufacturing', 'Other'] },
        { key: 'materials_used', label: 'Materials Used', type: 'input' }, // Materials used in the manufacturing process.
        { key: 'production_capacity', label: 'Production Capacity', type: 'input' }, // The number of items the service can produce.
        { key: 'lead_time', label: 'Lead Time', type: 'input' }, // The time it takes to produce and deliver the items.
        { key: 'price_per_unit', label: 'Price per Unit (₦)', type: 'input' }, // Pricing for the manufacturing service per item produced.
        { key: 'minimum_order', label: 'Minimum Order Quantity', type: 'input' }, // Minimum order required for the service.
        { key: 'certifications', label: 'Certifications', type: 'input' }, // Certifications for the manufacturing process (e.g., ISO).
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details of the service provider.
        { key: 'special_offers', label: 'Special Offers', type: 'input' }, // Any discounts or special promotions for manufacturing services.
        { key: 'quality_assurance', label: 'Quality Assurance', type: 'select', options: ['Yes', 'No', 'Available upon request'] }
    ],
    112: [
        { key: 'event_type', label: 'Type of Event', type: 'select', options: ['Wedding', 'Corporate Event', 'Birthday Party', 'Graduation', 'Private Party', 'Other'] },
        { key: 'menu_options', label: 'Menu Options', type: 'input' }, // Type of food or catering options available.
        { key: 'guests_served', label: 'Number of Guests', type: 'input' }, // The number of guests the service can accommodate.
        { key: 'service_area', label: 'Service Area', type: 'input' }, // Location or region where the service is available.
        { key: 'decor_style', label: 'Decor Style', type: 'input' }, // Style of event decor (e.g., modern, vintage, theme-based).
        { key: 'equipment_rentals', label: 'Equipment Rentals', type: 'input' }, // Available event equipment like sound systems, tents, etc.
        { key: 'pricing', label: 'Pricing', type: 'input' }, // Pricing details (can be hourly, per guest, etc.).
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // Any special accommodations or customizations requested by clients.
        { key: 'availability', label: 'Availability', type: 'select', options: ['Available Now', 'Available in 1 Week', 'Available in 1 Month', 'Other'] },
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details of the service provider.
        { key: 'reviews', label: 'Customer Reviews', type: 'input' } // Customer feedback or ratings for the service.
    ],
    113: [
        { key: 'pet_type', label: 'Type of Pet', type: 'select', options: ['Dog', 'Cat', 'Bird', 'Reptile', 'Other'] },
        { key: 'service_type', label: 'Type of Service', type: 'select', options: ['Pet Sitting', 'Grooming', 'Training', 'Walking', 'Veterinary Care', 'Other'] },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Available Now', 'Available in 1 Week', 'Available in 1 Month', 'Other'] },
        { key: 'service_area', label: 'Service Area', type: 'input' }, // Location or region where the service is available.
        { key: 'pricing', label: 'Pricing', type: 'input' }, // Pricing details for the service.
        { key: 'special_requests', label: 'Special Requests', type: 'input' }, // Any special accommodations for pets.
        { key: 'contact_info', label: 'Contact Information', type: 'input' }, // Contact details of the service provider.
        { key: 'reviews', label: 'Customer Reviews', type: 'input' } // Customer feedback or ratings for the service.
    ],
    115: [
        { key: 'service_type', label: 'Type of Printing Service', type: 'select', options: ['Business Cards', 'Flyers', 'Banners', 'T-Shirts', 'Posters', 'Other'] },
        { key: 'material_type', label: 'Material Type', type: 'select', options: ['Paper', 'Vinyl', 'Fabric', 'Plastic', 'Other'] },
        { key: 'color_options', label: 'Color Options', type: 'select', options: ['Black & White', 'Full Color', 'Custom'] },
        { key: 'order_quantity', label: 'Order Quantity', type: 'input' }, // Number of prints requested.
        { key: 'delivery_options', label: 'Delivery Options', type: 'select', options: ['Pickup', 'Home Delivery', 'Courier Service'] },
        { key: 'location', label: 'Service Location', type: 'input' },
        { key: 'turnaround_time', label: 'Turnaround Time', type: 'select', options: ['1 Day', '2-3 Days', '1 Week', 'Other'] },
        { key: 'design_services', label: 'Design Services Available?', type: 'select', options: ['Yes', 'No'] },
    ],
    116: [
        { key: 'recruitment_type', label: 'Type of Recruitment', type: 'select', options: ['Permanent', 'Temporary', 'Contract', 'Internship'] },
        { key: 'job_sector', label: 'Job Sector', type: 'select', options: ['IT', 'Healthcare', 'Construction', 'Finance', 'Education', 'Hospitality', 'Other'] },
        { key: 'experience_level', label: 'Experience Level', type: 'select', options: ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'] },
        { key: 'number_of_positions', label: 'Number of Positions', type: 'input' }, // Number of vacancies.
        { key: 'location', label: 'Job Location', type: 'input' },
        { key: 'remote_option', label: 'Remote Work Option', type: 'select', options: ['Yes', 'No', 'Hybrid'] },
        { key: 'salary_range', label: 'Salary Range', type: 'input' }, // Example: ₦100,000 - ₦200,000
        { key: 'qualification_required', label: 'Qualification Required', type: 'input' }, // Example: B.Sc., OND, etc.
    ],
    117: [
        { key: 'rental_type', label: 'Type of Rental Service', type: 'select', options: ['Vehicles', 'Event Equipment', 'Furniture', 'Tools & Machinery', 'Costumes', 'Other'] },
        { key: 'rental_duration', label: 'Rental Duration', type: 'select', options: ['Hourly', 'Daily', 'Weekly', 'Monthly', 'Custom'] },
        { key: 'item_condition', label: 'Item Condition', type: 'select', options: ['New', 'Good', 'Fair'] },
        { key: 'security_deposit_required', label: 'Security Deposit Required?', type: 'select', options: ['Yes', 'No'] },
        { key: 'pricing', label: 'Rental Price', type: 'input' }, // E.g., ₦10,000/day
        { key: 'delivery_options', label: 'Delivery Options', type: 'select', options: ['Pickup Only', 'Delivery Available', 'Both'] },
        { key: 'location', label: 'Rental Location', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Weekdays', 'Weekends', 'Anytime'] },
    ],
    118: [
        { key: 'repair_type', label: 'Type of Repair Service', type: 'select', options: ['Electronics', 'Home Appliances', 'Automobiles', 'Furniture', 'Plumbing', 'Other'] },
        { key: 'brand_specialization', label: 'Brand Specialization (if any)', type: 'input' },
        { key: 'service_location', label: 'Service Location', type: 'select', options: ['At Client\'s Location', 'At Repair Shop', 'Both'] },
        { key: 'warranty_offered', label: 'Warranty Offered', type: 'select', options: ['Yes', 'No'] },
        { key: 'estimated_completion_time', label: 'Estimated Completion Time', type: 'select', options: ['Same Day', '1-2 Days', 'Within a Week', 'Other'] },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Weekdays', 'Weekends', 'Anytime'] },
        { key: 'pricing', label: 'Pricing Details', type: 'input' }, // Example: ₦5,000 minimum or price range.
    ],
    119: [
        { key: 'service_type', label: 'Type of Service', type: 'select', options: ['Tax Preparation', 'Bookkeeping', 'Accounting', 'Financial Planning', 'Audit Services', 'Other'] },
        { key: 'client_type', label: 'Client Type', type: 'select', options: ['Individual', 'Business', 'Non-Profit', 'Other'] },
        { key: 'consultation_available', label: 'Consultation Available?', type: 'select', options: ['Yes', 'No'] },
        { key: 'service_mode', label: 'Mode of Service', type: 'select', options: ['In-person', 'Online', 'Both'] },
        { key: 'pricing', label: 'Service Pricing', type: 'input' }, // E.g., Starting from ₦50,000
        { key: 'location', label: 'Office Location', type: 'input' },
        { key: 'availability', label: 'Availability', type: 'select', options: ['Weekdays', 'Weekends', 'Anytime'] },
        { key: 'certifications', label: 'Certifications (if any)', type: 'input' },
    ],
    120: [
        { key: 'service_type', label: 'Type of Service', type: 'select', options: ['Flight Booking', 'Hotel Reservation', 'Tour Packages', 'Visa Assistance', 'Car Rental', 'Other'] },
        { key: 'destination', label: 'Destination(s)', type: 'input' }, // E.g., Dubai, London, Paris
        { key: 'package_type', label: 'Package Type', type: 'select', options: ['Solo Travel', 'Family Package', 'Group Tour', 'Corporate Package', 'Custom'] },
        { key: 'pricing', label: 'Estimated Pricing', type: 'input' }, // E.g., Starting from ₦100,000
        { key: 'service_mode', label: 'Mode of Service', type: 'select', options: ['In-person', 'Online', 'Both'] },
        { key: 'travel_dates', label: 'Available Travel Dates', type: 'input' }, // Free text or date range
        { key: 'documentation_assistance', label: 'Documentation Assistance?', type: 'select', options: ['Yes', 'No'] },
        { key: 'location', label: 'Office Location', type: 'input' },
    ],
    121: [
        { key: 'service_type', label: 'Type of Service', type: 'select', options: ['Venue Rental', 'Wedding Planning', 'Catering', 'Decoration', 'Photography/Videography', 'Entertainment', 'Other'] },
        { key: 'venue_type', label: 'Venue Type', type: 'select', options: ['Hall', 'Outdoor Garden', 'Beach', 'Hotel', 'Private Residence', 'Other'] },
        { key: 'guest_capacity', label: 'Guest Capacity', type: 'input' }, // e.g., Up to 500 guests
        { key: 'pricing', label: 'Starting Price or Package Cost', type: 'input' },
        { key: 'service_inclusions', label: 'What’s Included?', type: 'input' }, // e.g., Catering + Decoration + DJ
        { key: 'availability', label: 'Available Dates', type: 'input' }, // Free text or specific date range
        { key: 'customization_options', label: 'Customization Available?', type: 'select', options: ['Yes', 'No'] },
    ],
    122: [
        { key: 'service_category', label: 'Service Category', type: 'input' }, // User can specify what kind of service it is
        { key: 'pricing', label: 'Pricing Details', type: 'input' }, // How much it costs or pricing models
        { key: 'availability', label: 'Availability', type: 'input' }, // E.g., Available Weekends, Anytime, etc.
        { key: 'service_features', label: 'Key Features or Offerings', type: 'textarea' },
    ],
    123: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Internship'] },
        { key: 'salary_range', label: 'Salary Range', type: 'input' },
        { key: 'qualifications', label: 'Required Qualifications', type: 'textarea' },
        { key: 'experience', label: 'Years of Experience', type: 'input' },
        { key: 'application_deadline', label: 'Application Deadline', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    124: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'] },
        { key: 'salary_range', label: 'Salary Range', type: 'input' },
        { key: 'skills_required', label: 'Skills Required', type: 'textarea' },
        { key: 'experience_level', label: 'Experience Level', type: 'select', options: ['Entry Level', 'Mid Level', 'Senior Level'] },
        { key: 'portfolio_url', label: 'Portfolio or Website (Optional)', type: 'input' },
        { key: 'application_deadline', label: 'Application Deadline', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    125: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Gig'] },
        { key: 'talent_category', label: 'Talent Category', type: 'select', options: ['Music', 'Acting', 'Dance', 'Comedy', 'Visual Arts', 'Film Production', 'Photography', 'Other'] },
        { key: 'skills_required', label: 'Skills or Requirements', type: 'textarea' },
        { key: 'pay_structure', label: 'Pay Structure', type: 'input' }, // e.g., per gig, hourly, fixed, negotiable
        { key: 'application_deadline', label: 'Application Deadline', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' },
        { key: 'portfolio_url', label: 'Portfolio or Reel Link (Optional)', type: 'input' }
    ],
    126: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Live-in', 'Occasional', 'Weekend Only'] },
        { key: 'age_group', label: 'Age Group of Children', type: 'select', options: ['Infants (0–1)', 'Toddlers (1–3)', 'Preschool (3–5)', 'School-age (5+)'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'qualifications', label: 'Qualifications or Certifications', type: 'textarea' },
        { key: 'working_hours', label: 'Working Hours', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    127: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Internship'] },
        { key: 'required_skills', label: 'Required Skills', type: 'textarea' },
        { key: 'software_proficiency', label: 'Software/Tools Proficiency (e.g., MS Office)', type: 'input' },
        { key: 'experience_level', label: 'Experience Level', type: 'select', options: ['Entry Level', 'Mid Level', 'Senior Level'] },
        { key: 'working_hours', label: 'Working Hours', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    128: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'] },
        { key: 'tech_stack', label: 'Tech Stack / Tools Required', type: 'textarea' },
        { key: 'experience_level', label: 'Experience Level', type: 'select', options: ['Entry Level', 'Mid Level', 'Senior Level'] },
        { key: 'location', label: 'Location (or Remote)', type: 'input' },
        { key: 'qualifications', label: 'Qualifications or Certifications', type: 'textarea' },
        { key: 'working_hours', label: 'Working Hours or Time Zone', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' },
        { key: 'application_link', label: 'Application Link (Optional)', type: 'input' }
    ],
    129: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Temporary'] },
        { key: 'trade_type', label: 'Type of Trade', type: 'select', options: ['Plumbing', 'Electrical', 'Masonry', 'Carpentry', 'Welding', 'Painting', 'Roofing', 'General Labor', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'qualifications', label: 'Certifications or Qualifications', type: 'textarea' },
        { key: 'working_conditions', label: 'Working Conditions / Schedule', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Daily Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    130: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'consulting_area', label: 'Consulting Area or Industry', type: 'select', options: ['Business', 'Finance', 'Marketing', 'Operations', 'IT', 'HR', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'qualifications', label: 'Qualifications or Certifications', type: 'textarea' },
        { key: 'location', label: 'Location (or Remote)', type: 'input' },
        { key: 'compensation', label: 'Compensation / Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Availability', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    131: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Remote', 'Shift Work', 'Contract'] },
        { key: 'customer_channel', label: 'Customer Support Channel', type: 'select', options: ['Phone', 'Email', 'Chat', 'In-person', 'Social Media'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g. communication, CRM)', type: 'textarea' },
        { key: 'location', label: 'Location (or Remote)', type: 'input' },
        { key: 'working_hours', label: 'Working Hours / Shift Schedule', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    132: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Temporary'] },
        { key: 'license_type', label: 'Required License Type', type: 'select', options: ['Motorcycle', 'Car', 'Bus', 'Truck', 'Trailer', 'Other'] },
        { key: 'vehicle_provided', label: 'Is Vehicle Provided?', type: 'select', options: ['Yes', 'No'] },
        { key: 'experience_required', label: 'Experience Required (in years)', type: 'input' },
        { key: 'working_hours', label: 'Working Hours / Shifts', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Daily Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    133: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'engineering_field', label: 'Field of Engineering', type: 'select', options: ['Civil', 'Mechanical', 'Electrical', 'Environmental', 'Structural', 'Software', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'qualifications', label: 'Qualifications or Certifications', type: 'textarea' },
        { key: 'location', label: 'Location (or Remote)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Time Zone', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    134: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Seasonal', 'Contract'] },
        { key: 'job_area', label: 'Area of Work', type: 'select', options: ['Animal Care', 'Crop Management', 'Livestock Management', 'Veterinary', 'Agricultural Research', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., animal care, machinery)', type: 'textarea' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Daily Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    135: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Lawn Care, Tree Maintenance)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., pruning, irrigation)', type: 'textarea' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    136: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Cosmetology, Massage Therapy)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., skincare, hair styling)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications or Licenses', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    137: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Shift Work'] },
        { key: 'specialization', label: 'Specialization (e.g., Registered Nurse, Medical Assistant)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'certifications', label: 'Certifications or Licenses', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    138: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Seasonal'] },
        { key: 'department', label: 'Department (e.g., Housekeeping, Front Desk, Kitchen)', type: 'select', options: ['Housekeeping', 'Front Desk', 'Kitchen', 'Management', 'Maintenance', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., customer service, cooking)', type: 'textarea' },
        { key: 'working_hours', label: 'Working Hours / Shifts', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    139: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Residential, Commercial, Industrial)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., cleaning, sanitization, organization)', type: 'textarea' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    140: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'department', label: 'Department (e.g., Recruitment, Employee Relations, HR Management)', type: 'select', options: ['Recruitment', 'Employee Relations', 'HR Management', 'Compensation and Benefits', 'Training and Development', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., communication, negotiation, conflict resolution)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    141: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Remote', 'Contract'] },
        { key: 'duration', label: 'Internship Duration', type: 'input' },  // E.g., 3 months, 6 months, etc.
        { key: 'field_of_study', label: 'Field of Study', type: 'input' },  // E.g., Marketing, Engineering, etc.
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., communication, time management)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Stipend', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    142: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Corporate Law, Criminal Law, Family Law)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., legal research, contract drafting)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications or Licenses', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    143: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Truck Driving, Dispatching, Warehouse Management)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., route planning, logistics software)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., CDL, Forklift Certification)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    144: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'department', label: 'Department (e.g., Operations, Finance, HR)', type: 'select', options: ['Operations', 'Finance', 'HR', 'Sales', 'Marketing', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., leadership, project management)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    145: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Construction, Factory Work, Warehouse Work)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., physical stamina, operating machinery)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    146: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Production, Quality Control, Assembly)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., machinery operation, quality control, production management)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., Lean Manufacturing, Six Sigma)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    147: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Mining Operations, Exploration, Safety)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., machinery operation, mining safety)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., safety training, mining certifications)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    148: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'department', label: 'Department (e.g., Admin, Customer Support, HR)', type: 'select', options: ['Admin', 'Customer Support', 'HR', 'Sales', 'Marketing', 'Other'] },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., office management, communication, MS Office)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    149: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Part-time', 'Weekend Only', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Retail, Event Staff, Customer Service)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., time management, customer service)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Hourly Rate', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    150: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Quality Control, Quality Assurance, Inspection)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., attention to detail, problem-solving, statistical analysis)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., Six Sigma, ISO Standards)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    151: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Market Research, Survey Data Collection, Data Analysis)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., data analysis, survey design, statistical software)', type: 'textarea' },
        { key: 'education_requirements', label: 'Education Requirements (e.g., Degree in Statistics, Social Sciences)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    152: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Waitstaff, Bartender, Chef, Host)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., customer service, cooking, bartending)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    153: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Sales Associate, Store Manager, Stock Clerk)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., customer service, sales, inventory management)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    154: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Sales Executive, Telemarketer, Account Manager)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., communication, sales tactics, cold calling)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Commission Structure', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    155: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Security Officer, Surveillance, Guard)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., alertness, physical fitness, security equipment knowledge)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., Security Training, First Aid)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    156: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Coach, Fitness Trainer, Club Manager)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., fitness knowledge, coaching, leadership)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., Coaching License, Fitness Certifications)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    157: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Subject/Grade Level)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., teaching methods, communication, classroom management)', type: 'textarea' },
        { key: 'education_requirements', label: 'Education Requirements (e.g., Degree, Certification)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    158: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Software Developer, Data Scientist, IT Support)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., programming languages, data analysis, network management)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., AWS, Cisco, Google Developer)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    159: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (e.g., Tour Guide, Travel Consultant, Travel Agent)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., customer service, destination knowledge, sales)', type: 'textarea' },
        { key: 'certifications', label: 'Certifications (e.g., Travel & Tourism Courses, First Aid)', type: 'input' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    160: [
        { key: 'job_title', label: 'Job Title', type: 'input' },
        { key: 'job_type', label: 'Job Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
        { key: 'specialization', label: 'Specialization (if applicable)', type: 'input' },
        { key: 'experience_required', label: 'Experience Required', type: 'input' },
        { key: 'skills_required', label: 'Key Skills (e.g., specific to the role)', type: 'textarea' },
        { key: 'salary_range', label: 'Salary Range or Compensation', type: 'input' },
        { key: 'working_hours', label: 'Working Hours or Shifts', type: 'input' },
        { key: 'contact_email', label: 'Contact Email', type: 'input' }
    ],
    161: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Clothing', 'Toys', 'Baby Gear', 'Feeding Accessories', 'Others'] },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    162: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Diapers', 'Wipes', 'Baby Creams', 'Baby Oils', 'Baby Food', 'Others'] },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    163: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['T-Shirts', 'Pants', 'Dresses', 'Shorts', 'Jackets', 'Others'] },
        { key: 'size', label: 'Size', type: 'select', options: ['0-3 months', '3-6 months', '6-12 months', '1-2 years', '2-4 years', '4-6 years', 'Others'] },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    164: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Beds', 'Chairs', 'Tables', 'Bookshelves', 'Dressers', 'Others'] },
        { key: 'material', label: 'Material', type: 'input' },
        { key: 'age_group', label: 'Age Group', type: 'select', options: ['Infants', 'Toddlers', 'Pre-teens'] },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    165: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Car Seats', 'Strollers', 'Baby Monitors', 'Safety Gates', 'Baby Proofing Gear', 'Others'] },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    166: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Sneakers', 'Boots', 'Sandals', 'Slippers', 'Formal Shoes', 'Others'] },
        { key: 'size', label: 'Size', type: 'select', options: ['Infant', 'Toddler', 'Pre-teen', 'Teen'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    167: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Maternity Wear', 'Pregnancy Pillows', 'Breastfeeding Accessories', 'Maternity Skincare', 'Others'] },
        { key: 'size', label: 'Size', type: 'select', options: ['S', 'M', 'L', 'XL', 'XXL'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    168: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Single Prams', 'Double Prams', 'Travel Systems', 'Lightweight Strollers', 'Jogger Strollers', 'Others'] },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    169: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Slides', 'Swings', 'Climbing Frames', 'See-Saws', 'Sandbox', 'Others'] },
        { key: 'age_group', label: 'Age Group', type: 'select', options: ['Infants', 'Toddlers', 'Pre-teens', 'All Ages'] },
        { key: 'material', label: 'Material', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    170: [
        { key: 'product_name', label: 'Product Name', type: 'input' },
        { key: 'category', label: 'Category', type: 'select', options: ['Action Figures', 'Dolls', 'Board Games', 'Plush Toys', 'Building Blocks', 'Educational Toys', 'Others'] },
        { key: 'age_group', label: 'Age Group', type: 'select', options: ['Infants', 'Toddlers', 'Pre-teens', 'All Ages'] },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'material', label: 'Material', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
        { key: 'available_quantity', label: 'Available Quantity', type: 'input' },
    ],
    171: [
        { key: 'species', label: 'Species', type: 'input' },
        { key: 'age', label: 'Age', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used', 'Healthy'] },
        { key: 'feeding_habits', label: 'Feeding Habits', type: 'textarea' },
    ],
    172: [
        { key: 'breed', label: 'Breed', type: 'input' },
        { key: 'age', label: 'Age', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'vaccinated', label: 'Vaccinated', type: 'select', options: ['Yes', 'No'] },
        { key: 'spayed_neutered', label: 'Spayed/Neutered', type: 'select', options: ['Yes', 'No'] },
        { key: 'personality', label: 'Personality/Temperament', type: 'textarea' },
    ],
    173: [
        { key: 'breed', label: 'Breed', type: 'input' },
        { key: 'age', label: 'Age', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'vaccinated', label: 'Vaccinated', type: 'select', options: ['Yes', 'No'] },
        { key: 'microchipped', label: 'Microchipped', type: 'select', options: ['Yes', 'No'] },
        { key: 'pedigree', label: 'Pedigree', type: 'select', options: ['Yes', 'No'] },
        { key: 'training', label: 'Training', type: 'textarea' },
    ],
    174: [
        { key: 'species', label: 'Species', type: 'input' },
        { key: 'age', label: 'Age', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'water_type', label: 'Water Type', type: 'select', options: ['Freshwater', 'Saltwater'] },
        { key: 'tank_size', label: 'Tank Size', type: 'input' },
        { key: 'feeding_habits', label: 'Feeding Habits', type: 'textarea' },
    ],
    175: [
        { key: 'accessory_type', label: 'Accessory Type', type: 'input' },
        { key: 'material', label: 'Material', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'condition', label: 'Condition', type: 'select', options: ['New', 'Used'] },
    ],
    176: [
        { key: 'animal_type', label: 'Animal Type', type: 'input' },
        { key: 'species', label: 'Species', type: 'input' },
        { key: 'age', label: 'Age', type: 'input' },
        { key: 'size', label: 'Size', type: 'input' },
        { key: 'color', label: 'Color', type: 'input' },
        { key: 'care_requirements', label: 'Care Requirements', type: 'textarea' },
    ],
    177: [
        { key: 'machinery_type', label: 'Machinery Type', type: 'input' },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'model', label: 'Model', type: 'input' },
        { key: 'year', label: 'Year of Manufacture', type: 'input' },
        { key: 'condition', label: 'Condition (New/Used)', type: 'input' },
        { key: 'features', label: 'Key Features', type: 'textarea' },
    ],
    178: [
        { key: 'product_type', label: 'Product Type (Feed/Supplement/Seed)', type: 'input' },
        { key: 'brand', label: 'Brand', type: 'input' },
        { key: 'quantity', label: 'Quantity (Kg/Liter/Unit)', type: 'input' },
        { key: 'ingredients', label: 'Ingredients (For Feeds/Supplements)', type: 'textarea' },
        { key: 'expiry_date', label: 'Expiry Date', type: 'input' },
    ],
    179: [
        { key: 'animal_type', label: 'Animal Type (Cow, Goat, Poultry, etc.)', type: 'input' },
        { key: 'breed', label: 'Breed', type: 'input' },
        { key: 'age', label: 'Age of Animal', type: 'input' },
        { key: 'health_status', label: 'Health Status', type: 'textarea' },
        { key: 'availability', label: 'Availability (Available Now/On Request)', type: 'input' },
    ],
    180: [
        { key: 'meal_type', label: 'Meal Type (e.g., Local, Continental, Snacks)', type: 'input' },
        { key: 'ingredients', label: 'Ingredients', type: 'textarea' },
        { key: 'portion_size', label: 'Portion Size (e.g., Small, Medium, Large)', type: 'input' },
        { key: 'preparation_time', label: 'Preparation Time', type: 'input' },
        { key: 'location', label: 'Location (Where is it available?)', type: 'input' },
        { key: 'delivery_option', label: 'Delivery Option (e.g., Pickup, Delivery)', type: 'input' },
    ],

};
