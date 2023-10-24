export const selectIsLoggedIn = state => state.auth.isLoggedIn;

console.log(selectIsLoggedIn);

export const selectUsername = state => state.auth.username;

console.log(selectUsername);

export const selectIsRefreshing = state => state.auth.isRefreshing;

console.log(selectIsRefreshing);