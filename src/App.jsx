import { RouterProvider,createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import ProtectedRoute from "./components/protected-route";
import JobPage from "./pages/job";
import MyJobs from "./pages/my-jobs";
import PostJob from "./pages/post-job";
import JobListing from "./pages/jobListing";
import SavedJobs from "./pages/saved-jobs";
import { ThemeProvider } from "vite-plugin-react-ui";


const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage/>,
      },
      {
        path:"/onbaording",
        element: (
          <ProtectedRoute>
            <Onboarding/>
          </ProtectedRoute>
        ),
      },
      {
        path:"/jobs",
        element:(
          <ProtectedRoute>
            <JobListing/>
          </ProtectedRoute>
        ),
      },
      {
        path:"/job/:id",
        element:(
          <ProtectedRoute>
            <JobPage/>
          </ProtectedRoute>
        ),
      },
      {
        path:"/post-job",
        element:(
          <ProtectedRoute>
            <PostJob/>
          </ProtectedRoute>
        ),
      },
      {
        path:"/saved-jobs",
        element:(
          <ProtectedRoute>
            <SavedJobs/>
          </ProtectedRoute>
        ),
      },
      {
        path:"my-jobs",
        element:(
          <ProtectedRoute>
            <MyJobs/>
          </ProtectedRoute>
        ),
      }
    ],
  },
]);

function App() {

  return (
  < ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router ={router}/>
  </ThemeProvider>
   
  ); 
}

export default App;
