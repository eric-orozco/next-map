// This page is rendered when no locale-specific route matches
// It should redirect users to the default locale

import { redirect } from 'next/navigation';

export default function RootNotFound() {
  // Redirect to default locale if no locale route matches
  redirect('/en');
}