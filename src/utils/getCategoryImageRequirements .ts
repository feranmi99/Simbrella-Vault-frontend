
export const getCategoryImageRequirements = (categoryId: number) => {
    const requirements: Record<number, { min: number; max: number }> = {
        1: { min: 3, max: 8 },   // Phones & Tablets
        2: { min: 3, max: 8 },   // Laptops
        3: { min: 5, max: 15 },  // Vehicles (cars, bikes, etc.)
        4: { min: 3, max: 8 },   // Electronics
        5: { min: 5, max: 20 },  // Property (real estate)
        6: { min: 3, max: 10 },  // Home, Furniture & Appliances
        7: { min: 3, max: 8 },   // Agriculture & Food
        8: { min: 3, max: 8 },   // Fashion
        9: { min: 1, max: 5 },   // Services
        10: { min: 3, max: 8 },  // Health & Beauty
        11: { min: 3, max: 8 }, // Babies & Kids
        12: { min: 1, max: 3 },  // Jobs
        13: { min: 1, max: 3 },  // Seeking Work CVs
        14: { min: 3, max: 8 },  // Animals & Pets
    };

    return requirements[categoryId] || { min: 1, max: 5 }; // Default
};