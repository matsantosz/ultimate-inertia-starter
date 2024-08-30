<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name') }}</title>

    @routes
    @vite(['resources/app.ts', "resources/pages/{$page['component']}.vue"])
    @inertiaHead
  </head>
  <body class="bg-gradient-to-r from-slate-800 to-slate-900 text-white antialiased">
    @inertia
  </body>
</html>
