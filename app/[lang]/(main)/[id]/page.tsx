import { getDictionary } from "../../dictionaries";
import Modal from '../../Modal'
export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const translation = await getDictionary(lang);
  return (
    <Modal translation={translation}></Modal>
  );
}
