import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { Home } from '../pages/Home'
import { Show } from '../pages/Show'
import { Layout } from '../components/Layout'

export const rootRoute = createRootRoute({
  component: Outlet,
})

export const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: Layout,
})

export const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  component: Home,
})

export const showRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/show/$showId',
  component: Show,
})
