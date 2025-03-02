<script setup lang="ts">
const studyPlan = [
  {
    title: "Социальные основы маркетинга",
    subtitle:
      "Что такое маркетинг, как он работает, как проводить социальный опыт",
    subThemes: [
      {
        title: "Как проводить социальный опыт",
        subtitle:
          "Что такое социальный опыт, как проводить социальный опыт, как он влияет на маркетинг",
      },
      {
        title: "Как проводить социальный опыт",
        subtitle:
          "Что такое социальный опыт, как проводить социальный опыт, как он влияет на маркетинг",
      },
    ],
  },
  {
    title: "Процесс управления маркетингом",
    subtitle: "Как проводить социальный опыт, как он влияет на маркетинг",
  },
  {
    title: "Системы маркетинговых исследований и маркетинговой информации",
    subtitle: "Как проводить социальный опыт, как он влияет на маркетинг",
  },
  {
    title: "Маркетинговая среда",
    subtitle: "Как проводить социальный опыт, как он влияет на маркетинг",
  },
];
</script>

<template>
  <div class="flex items-start gap-4">
    <div class="w-full grow">
      <h1 class="text-2xl">Маркетинг</h1>
      <label
        class="mt-4 flex flex-col justify-between w-full p-3 h-[148px] bg-section-bg rounded-xl"
      >
        <input
          placeholder="Задайте любой вопрос по вашим материалам..."
          class="text outline-0 placeholder:transition-opacity focus:placeholder:opacity-0"
        />
        <div>
          <div
            class="w-fit px-3 text-sm py-1 rounded-full bg-section-separator"
          >
            Chat GPT 4o
          </div>
        </div>
      </label>
      <div class="mt-4 shrink-0 bg-section-bg rounded-xl p-3">
        <div class="text-lg">План обучения</div>
        <PlanItem
          v-for="plan in studyPlan"
          :key="plan.title"
          :title="plan.title"
          :subtitle="plan.subtitle"
          :subThemes="plan.subThemes"
        />
      </div>
    </div>
    <div class="shrink-0 w-[320px] bg-section-bg rounded-xl p-3">
      <div>Ваши материалы</div>
    </div>
  </div>
</template>
