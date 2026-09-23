import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title");
    console.log($title);
    $title[0].innerText = title;
  });
};

export default usePageTitle;
