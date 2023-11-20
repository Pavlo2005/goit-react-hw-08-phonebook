import { createSelector } from "@reduxjs/toolkit";

export const valueContacts = state => state.contacts.contacts;

export const valueFilter = state => state.filter.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const valueCurentContacts = createSelector(
    [valueContacts, valueFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
);