// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

import { useParams } from "react-router-dom";

function PageHeaders() {
  const { value, num, type, topic } = useParams();
  console.log("value is", num, value, type, topic);
  return (
    <BaseLayout
      title={topic}
      breadcrumb={[
        { label: "SHOPPIFY", route: "/sections/page-sections/page-headers" },
        { label: "ITEMS" },
      ]}
    >
      <View title={value} type={type} code={headerOneCode} index={num} name={topic} height="40rem">
        <HeaderOne index={num} title={topic} name={value} />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
