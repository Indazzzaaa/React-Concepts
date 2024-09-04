import React from "react";
import { Suspense } from "react";

const MyDelayedComponent: React.FC = React.lazy(() => {


  return import("./LazyComponent");
});

const SuspenceInAction = () => {
  return (
    <div className="bg-slate-300/80 p-8 border rounded-lg font-mono">
      <Suspense
        fallback={
          <div>We are loading the component please have grab coffee.</div>
        }
      >
        <MyDelayedComponent />
      </Suspense>
    </div>
  );
};

export default SuspenceInAction;
