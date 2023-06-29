const mapping: Record<string, string> = {
  bookings: 'booking',
  comments: 'comment',
  organizations: 'organization',
  ratings: 'rating',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
