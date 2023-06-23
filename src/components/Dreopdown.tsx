//@ts-nocheck
import React, { useState } from 'react';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative top-2">
      <HeadlessMenu>
        {({ open }) => (
          <>
            <HeadlessMenu.Button className="p-2" onClick={handleClick}>
              <FiMenu className="h-6 w-6 absolute right-6 top-2" />
            </HeadlessMenu.Button>
            <Transition
              show={open}
              enter="transition duration-300 transform ease-out"
              enterFrom="opacity-0 translate-x-2"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-200 transform ease-in"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-2"
            >
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg focus:outline-none">
                <HeadlessMenu.Items static>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-400' : 'bg-gray-200'
                        } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                      >
                        List Of Services
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-400' : 'bg-gray-200'
                        } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                      >
                        Service Providers
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-400' : 'bg-gray-200'
                        } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                      >
                        Feedback
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                     <a href="/ServiceHistory/historypage"> <button
                        className={`${
                          active ? 'bg-gray-400' : 'bg-gray-200'
                        } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                      >
                        History
                      </button></a>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-400' : 'bg-gray-200'
                        } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                      >
                        Booking
                      </button>
                    )}
                  </HeadlessMenu.Item>
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-400' : 'bg-gray-200'
                        } w-full px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600`}
                      >
                        Help and Contact
                      </button>
                    )}
                  </HeadlessMenu.Item>
                </HeadlessMenu.Items>
              </div>
            </Transition>
          </>
        )}
      </HeadlessMenu>
    </div>
  );
};

export default MenuBar;
