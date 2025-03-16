<script setup lang="ts">
import { ChevronLeftIcon, PlusIcon } from "lucide-vue-next";

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
      <div class="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <ChevronLeftIcon />
        </Button>
        <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
          Marketing
        </h3>
      </div>
      <Card class="mt-4">
        <CardHeader
          ><input
            placeholder="Задайте любой вопрос по вашим материалам..."
            class="text outline-0 placeholder:transition-opacity focus:placeholder:opacity-0"
        /></CardHeader>
        <CardFooter>
          <Chip> Chat GPT 4o </Chip>
        </CardFooter>
      </Card>
      <Card class="mt-4">
        <CardHeader
          ><CardTitle>Study plan</CardTitle
          ><CardDescription
            >Plan based on your materials</CardDescription
          ></CardHeader
        >
        <CardContent class="flex flex-col gap-2">
          <PlanItem
            v-for="plan in studyPlan"
            :key="plan.title"
            :title="plan.title"
            :subtitle="plan.subtitle"
            :subThemes="plan.subThemes || []"
          />
        </CardContent>
      </Card>
    </div>
    <Card class="w-[500px]">
      <CardHeader>
        <CardTitle>Library</CardTitle>
        <CardDescription>Your materials</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button class="w-full border-dashed" size="sm" variant="outline"
              ><PlusIcon /> Add material
            </Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload files</DialogTitle>
              <DialogDescription>
                Available formats is pdf, doc, docx, txt
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit">Upload</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  </div>
</template>
