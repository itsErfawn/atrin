import AtrinBlog from "@/components/module/main/AtrinBlog/AtrinBlog";
import Bestproducts from "@/components/module/main/Bestproducts/Bestproducts";
import CategoryProducts from "@/components/module/main/CategoryProducts/CategoryProducts";
import LatestAtrinProducts from "@/components/module/main/LatestAtrinProducts/LatestAtrinProducts";
import Mostpopularbrands from "@/components/module/main/Mostpopularbrands/Mostpopularbrands";
import Specialauction from "@/components/module/main/Specialauction/Specialauction";
import StoryList from "@/components/module/main/StoryList/StoryList";
import VIPproducts from "@/components/module/main/VIPproducts/VIPproducts";
import Womenclothing from "@/components/module/main/Womenclothing/Womenclothing";

import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" />
      <StoryList />
      <VIPproducts />
      <CategoryProducts />
      <Mostpopularbrands />
      <LatestAtrinProducts />
      <Bestproducts />
      <AtrinBlog />
      <Womenclothing />
      <Specialauction />
    </>
  );
}
