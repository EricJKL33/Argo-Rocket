export default function authMiddleware(to, from, next) {
    const isAuthenticated = localStorage.getItem('user-token');
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: 'signin' });
    } else {
      next();
    }
  }