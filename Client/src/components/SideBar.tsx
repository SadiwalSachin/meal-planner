// import React from 'react'
import {  NavLink } from "react-router-dom";
import { Calendar, Home, List, Settings, Utensils } from "lucide-react";

const SideBar = () => {
  return (
    <>
      <aside className="hidden w-64 bg-white shadow-md lg:block">
        <div className="flex h-full flex-col ">
          <div className="flex items-center justify-center py-5 bg-navie-400 ">
            <h1 className="text-xl font-bold text-white ">Meal Planner</h1>
          </div>
          <nav className="flex-1 overflow-y-auto bg-dashie-200 text-white">
            <ul className="p-2 space-y-1">
              <li>
                <NavLink
                  to="/"
                  style={(e)=>{
                    return {
                      backgroundColor:e.isActive?" #F3F4F6":""
                    }
                  }}
                  className={`flex items-center px-4 py-2 text-gray-700  rounded-md`}
                >
                  <Home className="w-5 h-5 mr-3" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                style={(e)=>{
                  return {
                    backgroundColor:e.isActive?" #F3F4F6":""
                  }
                }}
                  to="/plan-meal"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Plan Meal
                </NavLink>
              </li>
              <li>
                <NavLink
                style={(e)=>{
                  return {
                    backgroundColor:e.isActive?" #F3F4F6":""
                  }
                }}
                  to="/recipes"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Utensils className="w-5 h-5 mr-3" />
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink
                style={(e)=>{
                  return {
                    backgroundColor:e.isActive?" #F3F4F6":""
                  }
                }}
                  to="/grocery"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <List className="w-5 h-5 mr-3" />
                  Purchase Grocery
                </NavLink>
              </li>
              <li>
                <NavLink
                style={(e)=>{
                  return {
                    backgroundColor:e.isActive?" #F3F4F6":""
                  }
                }}
                  to="/grocery-list"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <List className="w-5 h-5 mr-3" />
                  Grocery List
                </NavLink>
              </li>
              <li>
                <NavLink
                style={(e)=>{
                  return {
                    backgroundColor:e.isActive?" #F3F4F6":""
                  }
                }}
                  to="/edit-profile"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
