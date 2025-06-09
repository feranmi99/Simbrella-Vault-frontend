import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "..";
import { CreateListingPayload } from "@/types/listing-type";

const initialState: CreateListingPayload = {
    category_id: "",
    sub_category_id: "",
    state_id: "",
    city_id: "",
    images: [],
    listingFields: {},
    description: "",
    hedge_currency: "NGN",
    price: 0,
    special_discount: 0,
    is_negotiable: "maybe",
    video: "",
    alternative_contact: "",
    stepper: "Brand",
    listing_plan: "boost",

    delivery_option: "pickup",
    coupon: "",
    title: "",
    coupon_discount: 0,
    pricing_type: "",
    paystack_ref: "",
    isBrandListing: undefined,
    brand_id: "",
    own_listing: undefined,

};

const listingSlice = createSlice({
    name: "listing",
    initialState,
    reducers: {
        setListingState: (state, action: PayloadAction<CreateListingPayload>) => {
            return { ...state, ...action.payload };
        },
        setCategoryId: (state, action: PayloadAction<string>) => {
            state.category_id = action.payload;
        },
        setSubCategoryId: (state, action: PayloadAction<string>) => {
            state.sub_category_id = action.payload;
        },
        setStateId: (state, action: PayloadAction<string>) => {
            state.state_id = action.payload;
        },
        setCityId: (state, action: PayloadAction<string>) => {
            state.city_id = action.payload;
        },
        setImages: (state, action: PayloadAction<string[]>) => {
            // state.images.push(action.payload);
            state.images = action.payload;
        },
        removeImage: (state, action: PayloadAction<string>) => {
            state.images = state.images.filter((image) => image !== action.payload);
        },
        clearImages: (state) => {
            state.images = [];
        },
        setStepper: (state, action: PayloadAction<string>) => {
            state.stepper = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload;
        },
        setSpecialDiscount: (state, action: PayloadAction<number>) => {
            state.special_discount = action.payload;
        },
        setIsNegotiable: (state, action: PayloadAction<string>) => {
            state.is_negotiable = action.payload;
        },
        setVideo: (state, action: PayloadAction<string>) => {
            state.video = action.payload;
        },
        SetAlternativeContact: (state, action: PayloadAction<string>) => {
            state.alternative_contact = action.payload;
        },
        SetHedgeCurrency: (state, action: PayloadAction<string>) => {
            state.hedge_currency = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setListingPlan: (state, action: PayloadAction<string>) => {
            state.listing_plan = action.payload;
        },
        setCoupon: (state, action: PayloadAction<string>) => {
            state.coupon = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setDeliveryOption: (state, action: PayloadAction<string>) => {
            state.delivery_option = action.payload;
        },
        setPriceType: (state, action: PayloadAction<string>) => {
            state.pricing_type = action.payload;
        },
        setPaystackRef: (state, action: PayloadAction<string>) => {
            state.paystack_ref = action.payload;
        },
        setCouponDiscount: (state, action: PayloadAction<number>) => {
            state.coupon_discount = action.payload;
        },
        setIsBrandListing: (state, action: PayloadAction<boolean>) => {
            state.isBrandListing = action.payload;
        },
        setBrandId: (state, action: PayloadAction<string>) => {
            state.brand_id = action.payload;
        },
        setOwnListing: (state, action: PayloadAction<boolean>) => { 
            state.own_listing = action.payload;
        },
        setDynamicField: (state, action: PayloadAction<{ key: string; value: any }>) => {
            const { key, value } = action.payload;

            if (!state.listingFields) {
                state.listingFields = {};
            }

            state.listingFields[key] = value;
        },
        resetDynamicFields: (state) => {
            state.listingFields = {};
        },
        clearListingInputFields: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: any) => {
            return {
                ...state,
                ...action.payload.listing,
            };
        });
    },
});

export const {
    setListingState,
    setCategoryId,
    setSubCategoryId,
    setStateId,
    setCityId,
    setImages,
    removeImage,
    clearImages,
    setStepper,
    setPrice,
    setSpecialDiscount,
    setIsNegotiable,
    setVideo,
    SetAlternativeContact,
    SetHedgeCurrency,
    setDynamicField,
    clearListingInputFields,
    setDescription,
    setListingPlan,
    resetDynamicFields,
    setCoupon,
    setTitle,
    setDeliveryOption,
    setPriceType,
    setPaystackRef,
    setCouponDiscount,
    setIsBrandListing,
    setBrandId,
    setOwnListing,
} = listingSlice.actions;

export const selectListing = (state: RootState) => state.listing;

export default listingSlice.reducer;
