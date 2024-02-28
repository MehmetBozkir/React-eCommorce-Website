import React from "react";


function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div>
      <label className="cursor-pointer grid place-items-center">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          onChange={handleToggle}
        />
      </label>
    </div>
  );
}

export default Theme;
