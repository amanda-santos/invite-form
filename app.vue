<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    class="bg-shape-background font-body grid h-screen grid-cols-3 gap-5 p-5"
  >
    <aside
      class="rounded-xl bg-[url(/background.png)] bg-contain bg-no-repeat p-8"
    >
      <NuxtImg src="/logo.svg" alt="" width="48" height="48" placeholder />
      <h1 class="font-logo text-accent-pink mt-4 mb-1 text-4xl">Festivite</h1>
      <p class="font-body text-text-heading">
        Crie um convite digital para o seu evento
      </p>
    </aside>

    <main class="bg-shape-body col-span-2 rounded-xl px-32 py-20">
      <h2 class="text-header-md text-text-heading font-heading mb-10 font-bold">
        Crie seu convite
      </h2>

      <div class="mb-6 flex items-center gap-3">
        <LucideCalendar class="text-input-placeholder" />
        <h3 class="text-header-sm text-text-heading font-heading font-bold">
          Sobre o evento
        </h3>
      </div>

      <form action="" class="grid w-full grid-cols-2 gap-4">
        <div class="col-span-2 flex w-full flex-col items-start gap-3">
          <label for="title" class="text-body-sm text-text-body">Título</label>
          <input
            id="title"
            type="text"
            name="title"
            class="placeholder:text-input-placeholder bg-input-base border-input-stroke text-text-heading focus:border-brand-light w-full rounded-lg border-2 px-4 py-3 focus:outline-none"
          />
        </div>

        <div class="flex w-full flex-col items-start gap-3">
          <label for="start-datetime" class="text-body-sm text-text-body"
            >Início</label
          >
          <input
            id="start-datetime"
            type="datetime-local"
            name="start-datetime"
            class="placeholder:text-input-placeholder bg-input-base border-input-stroke text-text-heading focus:border-brand-light w-full rounded-lg border-2 px-4 py-3 focus:outline-none"
          />
        </div>

        <div class="flex w-full flex-col items-start gap-3">
          <label for="end-datetime" class="text-body-sm text-text-body"
            >Fim</label
          >
          <input
            id="end-datetime"
            type="datetime-local"
            name="end-datetime"
            class="placeholder:text-input-placeholder bg-input-base border-input-stroke text-text-heading focus:border-brand-light w-full rounded-lg border-2 px-4 py-3 focus:outline-none"
          />
        </div>
      </form>
    </main>
  </div>
</template>
