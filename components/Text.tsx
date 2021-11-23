import React, {useContext} from "react";
import ThemeContext from "../context/themeContext";

const Text = () => {
  const {color} = useContext(ThemeContext);

  return (
    <p className={`text-lg leading-8 font-medium text-${color}-900 mt-4 dark:text-gray-50`}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur vitae
      totam ducimus corporis nihil. Reiciendis enim quisquam ea dolor nostrum error corporis dolorum iure.
    </p>
  );
};

export default Text;
