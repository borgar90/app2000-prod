import React, { useState, useEffect } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKBox from "components/MKBox";
import axios from "axios";
// Routes
import routes from "routes";
import MKButton from "components/MKButton";
import Container from "@mui/material/Container";

import MKInput from "components/MKInput";

import TabsProfile from "layouts/sections/navigation/nav-tabs/components/TabsSimple/TabsProfile";
import PostsTabContent from "./Tabs/PostsTabContent";
import BioTabContent from "./Tabs/BioTabContent";
import FriendsTabContent from "./Tabs/FriendsTabContent";
import PicturesTabContent from "./Tabs/PicturesTabContent";
import VideosTabContent from "./Tabs/VideosTabContent";
import { alpha } from "@mui/material";

const EditProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false); //TODO: add error handling [error, setError] = useState(false);
  const [success, setSuccess] = useState(false); //TODO: add success handling [success, setSuccess] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  };

  const handleProfilePhotoChange = (event) => {
    console.log(event.target.files[0]);

    setProfilePhoto(event.target.files[0]);
  };

  const handleSubmitProfilePhoto = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);
    axios
      .post("http://localhost:3001/api/v1/profile/profilePhoto", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Profile photo changed");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    setError(false);
    setSuccess(false);
    if (password === confirmPassword) {
      axios
        .post("http://localhost:3001/api/v1/grandmasterssmith/changePassword", {
          password: password,
        })
        .then((res) => {
          console.log(res);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err.response);
          setError(true);
        });

      alert("Password changed");
    } else {
      alert("Passwords do not match");
    }
  };

  useEffect(() => {
    // fetch profile data
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleTabs = (newValue) => {
    setActiveTab(newValue);
  };

  const handlModal = () => {
    setShowModal(!showModal);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <PostsTabContent />;
      case 1:
        return <BioTabContent />;
      case 2:
        return <FriendsTabContent />;
      case 3:
        return <PicturesTabContent />;
      case 4:
        return <VideosTabContent />;
      // Add cases for other tabs
      default:
        return null;
    }
  };

  const deleteProfile = () => {
    const conf = confirm("Are you sure you want to delete your profile?");
    if (!conf) return;
    axios
      .delete("http://localhost:3001/api/v1/grandmasterssmith/deleteProfile")
      .then((res) => {
        console.log(res);
        alert("Profile deleted");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const modal = (
    <div
      className="fixed w-full h-full"
      style={{
        backgroundColor: alpha("#C0C0C0", 0.5),
        top: 0,
        left: 0,
        zIndex: 9999999999,
        height: "100vh",
      }}
    >
      <div className="p-5" style={{}}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}

          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"

        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}

          <div
            className="inline-block align-bottom bg-white p-5 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white flex w-100 px-4 py-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h2 className="text-gray-900" id="modal-headline">
                    Edit your profile
                  </h2>
                  <hr className="my-5" />
                  <div className="flex flex-row">
                    <div className="flex flex-col mr-5 ">
                      <div
                        className="flex flex-col p-3 mb-5 "
                        style={{ backgroundColor: "#DCDCDC" }}
                      >
                        <div className="flex flex-col bg-white p-4 ">
                          <h2 className="mb-5">Profile</h2>
                          <MKInput
                            style={{ marginBottom: "1rem" }}
                            type="text"
                            label="Text"
                            value="John Smith"
                          />
                          <MKInput
                            style={{ marginBottom: "1rem" }}
                            type="email"
                            label="Email"
                            disabled
                            value="someone@example.com"
                            className="mt-5"
                          />
                          <MKInput
                            style={{ marginBottom: "1rem" }}
                            type="url"
                            label="URL"
                            value="www.creative-tim.com"
                            className="mb-5"
                          />
                          <MKInput
                            style={{ marginBottom: "1rem" }}
                            type="tel"
                            label="Phone"
                            value="40-(770)-888-444"
                            className="mb-5"
                          />
                          <MKInput
                            style={{ marginBottom: "1rem" }}
                            type="date"
                            label="Birthday"
                            value="2018-11-23"
                            className="mb-5"
                          />
                          <MKButton
                            className="mb-5"
                            color="info"
                            variant="contained"
                            style={{ marginBottom: "1rem" }}
                          >
                            Save
                          </MKButton>
                        </div>
                        <div className="flex flex-col bg-white p-4 mt-5">
                          <div
                            className="flex flex-row"
                            style={{ marginBottom: "1rem", marginTop: "1rem" }}
                          >
                            <p>Profile photo</p>
                          </div>
                          <MKInput
                            type="file"
                            label=""
                            onChange={handleProfilePhotoChange}
                            className="mb-5"
                            style={{ marginBottom: "1rem" }}
                          />
                          {profilePhoto && (
                            <img
                              src={URL.createObjectURL(profilePhoto)}
                              className="mb-5"
                              height={200}
                              alt="profile"
                            />
                          )}
                          <MKButton
                            color="info"
                            onClick={handleSubmitProfilePhoto}
                            variant="contained"
                          >
                            Save
                          </MKButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex flex-col p-4" style={{ backgroundColor: "#DCDCDC" }}>
                        <div className="flex flex-col bg-white p-4">
                          <h2 className="mb-5">Change password</h2>
                          <MKInput
                            type="password"
                            onChange={handlePasswordChange}
                            label="Password"
                            className="mb-5"
                            style={{ marginBottom: "1rem" }}
                          />
                          <MKInput
                            type="password"
                            onChange={handleConfirmPasswordChange}
                            label="Confirm password"
                            className="mb-2"
                            style={{ marginBottom: "1rem" }}
                          />
                          {error && <p className="text-red-500 my-1">Error updating password</p>}
                          {success && <p className="text-green-500 my-1">Password updated</p>}
                          <MKButton
                            className="mt-2"
                            color="info"
                            onClick={handleSubmitPassword}
                            variant="contained"
                            style={{ marginTop: "1rem" }}
                          >
                            Save
                          </MKButton>
                        </div>
                      </div>
                      <div
                        className="flex flex-col justify-between p-4 mt-5"
                        style={{ backgroundColor: "red", width: "300px", height: "200px" }}
                      >
                        <h3
                          className="text-lg text-white leading-6 font-medium text-gray-900"
                          id="modal-sub-headline"
                        >
                          Delete your profile
                        </h3>
                        <p className="text-sm text-white">
                          Are you sure you want to deactivate your account? All of your data will be
                          permanently removed. This action cannot be undone.
                        </p>
                        <MKButton color="white" variant="contained" onClick={() => deleteProfile()}>
                          Deactivate
                        </MKButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 px-1 py-1 sm:px-1 flex flex-row-reverse">
                  <MKButton
                    color="error"
                    variant="contained"
                    onClick={() => handlModal()}
                    className="mr-2"
                  >
                    X
                  </MKButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {showModal && modal}
      <Container>
        <MKBox>
          <div className="mb-5 mt-5 p-0">
            <DefaultNavbar
              routes={routes}
              action={{
                type: "internal",
                route: "https://www.creative-tim.com/product/material-kit-react",
                label: "Log out",
                color: "error",
              }}
              relative
              padding={{ xs: "0px", sm: "0px", md: "0px", lg: "0px" }}
            />
          </div>
          <div className="p-5" style={{ marginTop: "0px" }}>
            <div className="">
              {/* Profile column */}
              <div className="">
                <div className="post p-0 lg:p-0  rounded-md">
                  <div className="">
                    <div className="bg-white p-0 rounded-lg shadow-md  mb-4">
                      <div className="relative">
                        <img
                          src="https://placekitten.com/500/150"
                          alt="Banner Profile"
                          className="w-full rounded-t-lg"
                        />
                        <img
                          src="https://placekitten.com/150/150"
                          alt="Profile Picture"
                          className="absolute bottom-0 ml-5  w-50 h-50 rounded-full border-4 border-white"
                          style={{ transform: "translateY(30%)" }}
                        />
                      </div>
                      <div className="mt-5">{""}</div>
                      <div className="p-5 mt-5">
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col ">
                            <div className="flex items-center mt-4">
                              <h2 className="text-xl font-bold text-gray-800">
                                Borgar90@gmail.com
                              </h2>
                            </div>

                            <p className="text-gray-700 mt-2 mb-2">
                              {" "}
                              Web Developer | Cat Lover | Coffee Enthusiast{" "}
                            </p>
                          </div>
                          <div>
                            <MKButton
                              size="small"
                              className="mt-2 mb-5 "
                              onClick={() => handlModal()}
                              color="dark"
                            >
                              <i className="fas fa-edit mr-2"></i> Edit profile
                            </MKButton>
                          </div>
                        </div>
                        <hr className="my-5" />

                        <div className="ml-0">
                          <TabsProfile onTabChange={handleTabs} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {renderTabContent()}
            <div className="flex flex-row p-5">
              <div className="flex flex-col bg-white p-4 ">
                <h2>Friends</h2>
                <MKInput type="search" label="Search friends" value="" />
                <p>friend 1</p>
                <p>friend 2</p>
                <p>friend 3</p>
              </div>
            </div>
          </div>
        </MKBox>
      </Container>
    </div>
  );
};

export default EditProfile;
