// import { Category } from "./category-type";
import { Category } from "./category-type";
import { Listings } from "./listing-type";
import { IUser } from "./user-types";

export interface Brand {
    id: number;
    owner_id: number;
    category_id: number;
    brand_name: string;
    user_name: string;
    description: string;
    logo: string;
    email: string | null;
    phone: string | null;
    alternative_contact: string | null;
    address: string;
    state_id: number;
    city_id: number;
    country: string;
    social_links: Record<string, string> | null;
    verified: boolean;
    is_active: boolean;
    created_by_ip: string;
    status: BrandStatus;
    website_url: string | null;
    created_at: string;
    updated_at: string;
    isFollowing: boolean;

    owner?: IUser;
    state?: Location;
    city?: City;
    category?: Category;
    followers?: any[];
    listings?: any[];
}

export enum BrandStatus {
    PENDING = 'pending',
    UNDER_REVIEW = 'under_review',
    ACTIVE = 'active',
    SUSPENDED = 'suspended',
    REJECTED = 'rejected',
    INACTIVE = 'inactive',
    VERIFIED = 'verified',
    BANNED = 'banned'
}


export interface Filters {
    category_id: string | 'All';
    state_id: string | 'All';
    status: BrandStatus | 'All';
    searchQuery: string;
    showOwnedOnly: boolean;
}