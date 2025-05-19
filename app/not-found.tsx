import { InfoBlock } from "@/shared/components";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-80">
      <InfoBlock
        title="Страница не найдена"
        text="Проверьте корректность введённого адреса или повторите попытку позже"
        imageUrl="/assets/images/not-found.png"
      />
    </div>
  );
}