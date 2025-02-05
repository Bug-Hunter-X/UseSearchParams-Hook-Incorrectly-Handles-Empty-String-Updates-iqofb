# React Router v6 useSearchParams Empty String Bug

This repository demonstrates a bug in React Router v6's `useSearchParams` hook where updating a search parameter to an empty string ('') removes the parameter entirely instead of setting it to an empty string.  This can lead to unexpected application behavior.

## Bug Description

When using `useSearchParams`, if you attempt to update a search parameter to an empty string using the `set` method, the parameter will be removed from the URL instead of being set to an empty string. This is inconsistent with how other parameters are handled and makes it challenging to distinguish between a parameter being absent and having an empty string value.

## Reproduction

The `bug.js` file demonstrates the issue.  Run the application and observe the behavior when setting the `test` parameter to an empty string.

## Solution

The `bugSolution.js` file demonstrates a workaround involving using a different string to represent an empty parameter and converting back to empty string when it is necessary.  This is not an ideal solution and highlights the limitation of the `useSearchParams` hook in its current form.

## Proposed Solution

A more robust implementation of `useSearchParams` would handle empty strings correctly without requiring workarounds.
