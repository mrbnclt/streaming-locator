import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { Home } from '../pages/Home'
import { Show } from '../pages/Show'

export const rootRoute = createRootRoute({
  component: Outlet,
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

export const showRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/show/$showId',
  component: Show,
})
