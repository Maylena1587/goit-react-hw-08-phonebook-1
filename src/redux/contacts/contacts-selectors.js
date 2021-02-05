import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.entries;

export const getFilter = state => state.contacts.filter;

export const getLoadingData = state => state.contacts.isLoading;

export const getErrorData = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact?.name?.toLowerCase().includes(normalizedFilter),
    );
  },
);
