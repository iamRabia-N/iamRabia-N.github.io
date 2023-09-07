import React, { Component } from "react";

export default class ExperienceImg extends Component {
  render() {
    // const theme = this.props.theme;
    return (
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   width="882.346"
      //   height="778.999"
      //   data-name="Layer 1"
      //   viewBox="0 0 882.346 778.999"
      // >
      //   <path
      //     fill="#e6e6e6"
      //     d="M342.362 20.06l3.47-5.362a80.387 80.387 0 00-3.56-8.333l-2.244 1.812 1.777-2.745C340.112 2.1 338.78 0 338.78 0s-6.958 10.965-9.283 22.575l4.452 6.88-4.929-3.98a32.522 32.522 0 00-.27 4.078c0 13.75 4.49 24.895 10.03 24.895s10.03-11.146 10.03-24.895a42.818 42.818 0 00-2.295-12.848z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M366.92 31.98l6.245-1.338a80.386 80.386 0 003.375-8.41l-2.868-.304 3.197-.685c1.16-3.554 1.702-5.98 1.702-5.98s-12.673 2.833-22.526 9.398l-1.718 8.014-.67-6.3a32.524 32.524 0 00-3.075 2.692c-9.722 9.723-14.428 20.78-10.511 24.696s14.973-.789 24.696-10.511a42.818 42.818 0 007.462-10.707z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M369.2 85.184c-14.48.926-30.26-.054-47.045 0V46.752c14.791 2.303 30.565 2.066 47.046 0zM472.802 115.151l2.262-3.496a52.424 52.424 0 00-2.321-5.434l-1.463 1.181 1.158-1.79c-1.104-2.173-1.972-3.542-1.972-3.542a50.241 50.241 0 00-6.054 14.721l2.903 4.488-3.214-2.597a21.21 21.21 0 00-.176 2.66c0 8.967 2.928 16.236 6.54 16.236s6.542-7.27 6.542-16.236a27.923 27.923 0 00-1.497-8.378z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M488.817 122.925l4.072-.873a52.42 52.42 0 002.201-5.483l-1.87-.2 2.085-.446c.756-2.318 1.11-3.9 1.11-3.9a50.241 50.241 0 00-14.69 6.13l-1.12 5.225-.437-4.108a21.208 21.208 0 00-2.006 1.755c-6.34 6.34-9.41 13.551-6.855 16.106s9.765-.515 16.106-6.855a27.923 27.923 0 004.866-6.983z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M490.304 157.622c-9.443.604-19.733-.036-30.68 0v-25.063a110.584 110.584 0 0030.68 0zM484.473 231.898c-8.34.533-17.425-.031-27.091 0v-22.13a97.647 97.647 0 0027.09 0z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M167.508 82.481H532.0550000000001V92.66399999999999H167.508z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M167.508 154.78H532.0550000000001V164.963H167.508z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M167.508 227.078H532.0550000000001V237.261H167.508z"
      //   ></path>
      //   <circle cx="470.958" cy="197.548" r="20.366" fill="#e6e6e6"></circle>
      //   <circle cx="470.958" cy="197.548" r="16.293" fill="#fff"></circle>
      //   <circle cx="470.958" cy="197.548" r="4.073" fill="#e6e6e6"></circle>
      //   <path
      //     fill="#e6e6e6"
      //     d="M634.876 249.902H636.913V266.195H634.876z"
      //     transform="rotate(90 586.732 148.385)"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M628.767 243.793H630.8040000000001V260.086H628.767z"
      //     transform="rotate(180 550.372 221.688)"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M339.725 105.104H353.20000000000005V158.44299999999998H339.725z"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M339.725 113.526H353.20000000000005V119.702H339.725z"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M339.725 140.476H353.20000000000005V146.652H339.725z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M318.951 105.104H332.42600000000004V158.44299999999998H318.951z"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M318.951 113.526H332.42600000000004V119.702H318.951z"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M318.951 140.476H332.42600000000004V146.652H318.951z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M522.695 165.605H536.1700000000001V218.944H522.695z"
      //     transform="rotate(-26.34 320.74 501.41)"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M515.969 175.601H529.4440000000001V181.777H515.969z"
      //     transform="rotate(-26.34 314.014 487.824)"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M527.926 199.753H541.4010000000001V205.92899999999997H527.926z"
      //     transform="rotate(-26.34 325.971 511.976)"
      //   ></path>
      //   <path fill="#e6e6e6" d="M219.567 177.403H233.042V230.742H219.567z"></path>
      //   <path
      //     fill="#ccc"
      //     d="M219.567 185.825H233.042V192.00099999999998H219.567z"
      //   ></path>
      //   <path fill="#ccc" d="M219.567 212.775H233.042V218.951H219.567z"></path>
      //   <path fill="#e6e6e6" d="M198.793 177.403H212.268V230.742H198.793z"></path>
      //   <path
      //     fill="#ccc"
      //     d="M198.793 185.825H212.268V192.00099999999998H198.793z"
      //   ></path>
      //   <path fill="#ccc" d="M198.793 212.775H212.268V218.951H198.793z"></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M402.537 237.903H416.012V291.24199999999996H402.537z"
      //     transform="rotate(-26.34 200.582 573.708)"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M395.811 247.899H409.286V254.075H395.811z"
      //     transform="rotate(-26.34 193.856 560.122)"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M407.769 272.051H421.244V278.227H407.769z"
      //     transform="rotate(-26.34 205.813 584.274)"
      //   ></path>
      //   <path fill="#e6e6e6" d="M345.835 177.403H359.31V230.742H345.835z"></path>
      //   <path
      //     fill="#ccc"
      //     d="M345.835 185.825H359.31V192.00099999999998H345.835z"
      //   ></path>
      //   <path fill="#ccc" d="M345.835 212.775H359.31V218.951H345.835z"></path>
      //   <path fill="#e6e6e6" d="M325.061 177.403H338.536V230.742H325.061z"></path>
      //   <path
      //     fill="#ccc"
      //     d="M325.061 185.825H338.536V192.00099999999998H325.061z"
      //   ></path>
      //   <path fill="#ccc" d="M325.061 212.775H338.536V218.951H325.061z"></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M528.805 237.903H542.28V291.24199999999996H528.805z"
      //     transform="rotate(-26.34 326.85 573.708)"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M522.079 247.899H535.554V254.075H522.079z"
      //     transform="rotate(-26.34 320.123 560.122)"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M534.036 272.051H547.511V278.227H534.036z"
      //     transform="rotate(-26.34 332.08 584.274)"
      //   ></path>
      //   <path fill="#e6e6e6" d="M449.987 32.646H503.543V86.202H449.987z"></path>
      //   <path fill="#ccc" d="M460.699 43.357H492.833V75.491H460.699z"></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M470 54.143L476.814 65.944 483.627 77.745 470 77.745 456.373 77.745 463.187 65.944 470 54.143z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M481.839 56.398L488.653 68.199 495.466 80 481.839 80 468.212 80 475.026 68.199 481.839 56.398z"
      //   ></path>
      //   <circle cx="486.631" cy="48.994" r="3.946" fill="#e6e6e6"></circle>
      //   <path
      //     fill="#e6e6e6"
      //     d="M179.123 32.646H232.67899999999997V86.202H179.123z"
      //   ></path>
      //   <path
      //     fill="#ccc"
      //     d="M189.834 43.357H221.96800000000002V75.491H189.834z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M199.136 54.143L205.949 65.944 212.763 77.745 199.136 77.745 185.509 77.745 192.322 65.944 199.136 54.143z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M210.975 56.398L217.788 68.199 224.601 80 210.975 80 197.348 80 204.161 68.199 210.975 56.398z"
      //   ></path>
      //   <circle cx="215.766" cy="48.994" r="3.946" fill="#e6e6e6"></circle>
      //   <path
      //     fill="#6c63ff"
      //     d="M71.497 397.845l3.47-5.362a80.387 80.387 0 00-3.56-8.333l-2.243 1.812 1.776-2.745c-1.693-3.333-3.025-5.432-3.025-5.432s-6.958 10.965-9.283 22.574l4.452 6.881-4.928-3.98a32.524 32.524 0 00-.27 4.077c0 13.75 4.49 24.896 10.03 24.896s10.03-11.146 10.03-24.896a42.818 42.818 0 00-2.295-12.847z"
      //   ></path>
      //   <path
      //     fill="#6c63ff"
      //     d="M96.055 409.765l6.245-1.338a80.386 80.386 0 003.375-8.41l-2.868-.304 3.198-.686c1.16-3.553 1.702-5.98 1.702-5.98s-12.674 2.834-22.527 9.399l-1.717 8.014-.67-6.3a32.524 32.524 0 00-3.075 2.692c-9.723 9.722-14.429 20.78-10.512 24.696s14.974-.79 24.696-10.512a42.818 42.818 0 007.462-10.706z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M98.336 462.969c-14.48.926-30.26-.054-47.046 0v-38.432c14.792 2.303 30.565 2.066 47.046 0z"
      //   ></path>
      //   <path fill="#e6e6e6" d="M500.998 475.031H696.509V728.585H500.998z"></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M92.664 488.269H102.84700000000001V728.585H92.664z"
      //   ></path>
      //   <path fill="#e6e6e6" d="M0 457.72H696.509V478.086H0z"></path>
      //   <path fill="#e6e6e6" d="M87.573 478.086H107.939V498.452H87.573z"></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M614.155 489.796L613.009 494.379 584.497 494.379 582.779 489.796 510.162 489.796 510.162 536.638 687.344 536.638 687.344 489.796 614.155 489.796z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M614.155 548.857L613.009 553.439 584.497 553.439 582.779 548.857 510.162 548.857 510.162 595.698 687.344 595.698 687.344 548.857 614.155 548.857z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M614.155 607.918L613.009 612.5 584.497 612.5 582.779 607.918 510.162 607.918 510.162 654.759 687.344 654.759 687.344 607.918 614.155 607.918z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M614.155 666.979L613.009 671.561 584.497 671.561 582.779 666.979 510.162 666.979 510.162 713.82 687.344 713.82 687.344 666.979 614.155 666.979z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M377.785 454.665L317.706 454.665 319.742 428.19 375.748 428.19 377.785 454.665z"
      //   ></path>
      //   <path fill="#e6e6e6" d="M314.651 451.611H381.858V457.721H314.651z"></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M462.812 257.627H233.188a6.11 6.11 0 00-6.11 6.11V403.75h241.844V263.737a6.11 6.11 0 00-6.11-6.11z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M227.078 403.751v22.912a6.11 6.11 0 006.11 6.11h229.624a6.11 6.11 0 006.11-6.11V403.75z"
      //   ></path>
      //   <path fill="#fff" d="M239.298 270.355H457.212V392.55H239.298z"></path>
      //   <circle cx="348.254" cy="418.007" r="6.11" fill="#3f3d56"></circle>
      //   <path
      //     fill="#3f3d56"
      //     d="M865.035 727.057c-22.254 1.424-46.502-.082-72.298 0v-59.06c22.73 3.538 46.97 3.175 72.298 0z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M831.432 673.3L825.322 673.3 827.359 553.949 829.395 553.949 831.432 673.3z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M858.926 674.107L852.816 674.107 854.853 554.755 856.889 554.755 858.926 674.107z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M806.993 674.107L800.883 674.107 802.92 554.755 804.956 554.755 806.993 674.107z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M836.523 477.577l9.863-15.243a228.514 228.514 0 00-10.118-23.686l-6.378 5.15 5.05-7.803c-4.813-9.474-8.6-15.442-8.6-15.442s-19.78 31.17-26.388 64.172l12.656 19.56-14.01-11.316a92.452 92.452 0 00-.77 11.593c0 39.085 12.766 70.77 28.513 70.77s28.512-31.685 28.512-70.77c0-12.117-2.742-24.794-6.523-36.521z"
      //   ></path>
      //   <path
      //     fill="#6c63ff"
      //     d="M864.017 479.614l9.863-15.243a228.515 228.515 0 00-10.119-23.687l-6.377 5.151 5.05-7.804c-4.813-9.473-8.6-15.442-8.6-15.442s-19.78 31.17-26.388 64.173l12.656 19.56-14.011-11.317a92.452 92.452 0 00-.769 11.593c0 39.086 12.766 70.771 28.512 70.771s28.512-31.685 28.512-70.77c0-12.118-2.74-24.795-6.522-36.521z"
      //   ></path>
      //   <path
      //     fill="#6c63ff"
      //     d="M812.085 479.614l9.862-15.243a228.517 228.517 0 00-10.118-23.687l-6.378 5.151 5.05-7.804c-4.813-9.473-8.6-15.442-8.6-15.442s-19.78 31.17-26.388 64.173l12.656 19.56-14.01-11.317a92.452 92.452 0 00-.77 11.593c0 39.086 12.766 70.771 28.513 70.771s28.512-31.685 28.512-70.77c0-12.118-2.742-24.795-6.523-36.521z"
      //   ></path>
      //   <path fill="#3f3d56" d="M309.964 304.848H368.72V308.221H309.964z"></path>
      //   <path fill="#6c63ff" d="M309.964 317.151H400.696V320.524H309.964z"></path>
      //   <path fill="#6c63ff" d="M309.964 328.742H383.909V332.115H309.964z"></path>
      //   <path fill="#3f3d56" d="M309.964 340.29H353.132V343.663H309.964z"></path>
      //   <path fill="#3f3d56" d="M309.964 351.837H375.115V355.21H309.964z"></path>
      //   <path fill="#3f3d56" d="M283.184 303.649H290.379V310.844H283.184z"></path>
      //   <path fill="#6c63ff" d="M283.184 315.24H290.379V322.435H283.184z"></path>
      //   <path fill="#6c63ff" d="M283.184 326.831H290.379V334.026H283.184z"></path>
      //   <path fill="#3f3d56" d="M283.184 338.423H290.379V345.618H283.184z"></path>
      //   <path fill="#3f3d56" d="M283.184 350.014H290.379V357.209H283.184z"></path>
      //   <path
      //     fill="#6c63ff"
      //     d="M447.115 298.463h-30.833a107.84 107.84 0 010-36.763h30.833a66.148 66.148 0 000 36.763z"
      //   ></path>
      //   <path
      //     fill="#2f2e41"
      //     d="M222.764 372.144l-12.685-3.092a32.657 32.657 0 01-32.05-39.124 42.685 42.685 0 0142.63-42.738 42.685 42.685 0 0142.739 42.631c7.192 25.028-15.334 48.49-40.634 42.323z"
      //   ></path>
      //   <circle cx="236.62" cy="345.243" r="31.364" fill="#ffb8b8"></circle>
      //   <path
      //     fill="#ffb8b8"
      //     d="M216.165 361.607s-9.545 32.727-15 35.455 43.637 6.818 43.637 6.818-1.364-31.364 1.363-34.091-30-8.182-30-8.182z"
      //   ></path>
      //   <path
      //     fill="#2f2e41"
      //     d="M265.256 563.426s61.364-5.455 69.546 15-5.455 141.818-5.455 141.818h-25.909v-99.546s-110.472-31.401-110.472-42.31 72.29-14.962 72.29-14.962z"
      //   ></path>
      //   <path
      //     fill="#2f2e41"
      //     d="M325.256 714.79l13.637 5.454s16.363-1.364 9.545 10.91a27.004 27.004 0 01-19.09 13.635s-25.91 9.546-27.274 0 6.819-28.636 6.819-28.636zM231.165 563.426s61.364-5.455 69.546 15-5.455 141.818-5.455 141.818h-25.909v-99.546s-78.418-18.164-78.418-29.073c0-5.125-5.344-31.17 4.073-36.658 10.628-6.193 36.163 8.459 36.163 8.459z"
      //   ></path>
      //   <path
      //     fill="#2f2e41"
      //     d="M291.165 714.79l13.637 5.454s16.363-1.364 9.545 10.91a27.004 27.004 0 01-19.09 13.635s-25.91 9.546-27.274 0 6.819-28.636 6.819-28.636z"
      //   ></path>
      //   <path
      //     fill="#575a89"
      //     d="M202.529 392.97l40.98 4.455a30.182 30.182 0 0126.269 23.767l15.933 75.415s5.454 75-5.455 79.091-25.909-16.363-46.364-13.636-47.045 8.864-47.045 8.864-4.223-134.248-4.773-145.228c-1.1-21.951 20.455-32.727 20.455-32.727z"
      //   ></path>
      //   <path
      //     fill="#ffb8b8"
      //     d="M299.6 567.322l16.824 9.908s30.183-4.331 29.24 6.278-33.888 8.558-33.888 8.558l-20.275-12.493z"
      //   ></path>
      //   <circle cx="175.743" cy="299.475" r="20.26" fill="#2f2e41"></circle>
      //   <path
      //     fill="#2f2e41"
      //     d="M194.436 288.584a20.25 20.25 0 00-24.246-19.836 20.25 20.25 0 1112.63 38.164 20.243 20.243 0 0011.616-18.328zM211.817 300.074l27.313-5.03 21.005 13.166a31.863 31.863 0 0114.677 31.095l-21.037-5.332-4.71-11.812-5.611 9.196-29.334 37.75-16.47-10.488-14.683-23.01z"
      //   ></path>
      //   <path
      //     fill="#575a89"
      //     d="M234.309 404.57l13.636-6.818s28.637 4.091 34.091 23.182 30 151.364 30 151.364l-23.182 10.91-32.727-80.455z"
      //   ></path>
      //   <path
      //     d="M245.917 458.23L259.565 511.205 283.767 570.701 282.928 572.761 254.063 512.199 245.917 458.23z"
      //     opacity="0.2"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M144.084 750.379L139.271 748.721 185.896 610.231 192.636 612.553 144.084 750.379z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M322.291 750.379L327.105 748.721 280.479 610.231 273.74 612.553 322.291 750.379z"
      //   ></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M223.77 778.981L228.861 778.999 230.443 617.107 223.315 617.082 223.77 778.981z"
      //   ></path>
      //   <path
      //     fill="#6c63ff"
      //     d="M132.3 528.856l13.966 56.445a44.826 44.826 0 0032.642 32.722 238.26 238.26 0 00118.547-.764l20.85-5.5c12.117-3.194 21.227-13.6 22.09-26.1a25.685 25.685 0 00-2.323-12.872q-.123-.26-.246-.515a34.064 34.064 0 00-29.598-19.138l-22.09-.713-80.444-35.64s-27.667-14.053-50.412-15.626c-15.02-1.04-26.599 13.085-22.982 27.701z"
      //   ></path>
      //   <path
      //     fill="#e6e6e6"
      //     d="M543.257 351.309H622.683V459.24800000000005H543.257z"
      //   ></path>
      //   <path fill="#fff" d="M552.421 363.764H613.518V446.794H552.421z"></path>
      //   <path fill="#3f3d56" d="M576.467 385.492H606.069V388.865H576.467z"></path>
      //   <path fill="#3f3d56" d="M559.87 383.625H567.065V390.82H559.87z"></path>
      //   <path fill="#3f3d56" d="M576.467 399.748H606.069V403.121H576.467z"></path>
      //   <path
      //     fill="#3f3d56"
      //     d="M559.87 397.881H567.065V405.07599999999996H559.87z"
      //   ></path>
      //   <path fill="#3f3d56" d="M576.467 414.004H606.069V417.377H576.467z"></path>
      //   <path fill="#3f3d56" d="M559.87 412.137H567.065V419.332H559.87z"></path>
      //   <rect
      //     width="6.11"
      //     height="6.11"
      //     x="579.915"
      //     y="354.364"
      //     fill="#3f3d56"
      //     rx="3.055"
      //   ></rect>
      // </svg>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="744.799"
      height="449.141"
      data-name="Layer 1"
      viewBox="0 0 744.799 449.141"
    >
      <path
        fill="#f2f2f2"
        d="M725.24 449.141c68.234-120.696-62.641-182.51-79.487-55.057-.853-16.448-1.757-33.16-7.22-48.698-8.298-32.233-53.385-55.589-74.92-22.961-11.384 20.217 3.713 48.577-9.38 67.734-8.257-48.215-78.262-36.904-70.891 11.473 5.534 23.242 30.09 36.767 49.69 47.282z"
      ></path>
      <path
        fill="#fff"
        d="M493.37 372.427c34.636 11.24 77.921 30.17 81.433 71.55.1 1.64 2.668 1.652 2.566 0-.897-14.611-8.018-27.982-17.878-38.557-10.81-11.594-24.82-19.512-39.283-25.656-2.827-.654-32.263-14.58-26.839-7.337zM580.877 311.904a233.055 233.055 0 0132.74 132.906c-.095 1.65 2.472 1.645 2.567 0a235.892 235.892 0 00-19.043-106.847c-1.636-3.012-14.833-34.728-16.264-26.059zM706.494 326.647a374.884 374.884 0 00-30.951 119.957c-.144 1.645 2.424 1.635 2.566 0a372.914 372.914 0 0120.54-93.568c-.03-3.361 14.763-30.642 7.845-26.389z"
      ></path>
      <path
        fill="#f2f2f2"
        d="M409.2 447.065c19.533-34.55-17.931-52.245-22.754-15.76-.244-4.709-.503-9.493-2.067-13.94-2.375-9.228-15.281-15.914-21.446-6.574-3.259 5.788 1.063 13.906-2.685 19.39-2.364-13.802-22.404-10.564-20.293 3.284 1.584 6.653 8.613 10.525 14.224 13.535z"
      ></path>
      <path
        fill="#fff"
        d="M342.825 425.105c9.915 3.217 22.306 8.637 23.311 20.482.029.47.764.473.735 0a18.063 18.063 0 00-5.118-11.037 32.37 32.37 0 00-11.245-7.345c-.81-.187-9.236-4.173-7.683-2.1zM367.875 407.78a66.714 66.714 0 019.372 38.045c-.027.473.708.471.735 0a67.526 67.526 0 00-5.451-30.586c-.469-.862-4.246-9.94-4.656-7.46zM403.834 412a107.314 107.314 0 00-8.86 34.339c-.041.47.694.468.735 0a106.75 106.75 0 015.88-26.785c-.01-.962 4.225-8.771 2.245-7.554z"
      ></path>
      <path fill="#3f3d56" d="M284 19H1a1 1 0 010-2h283a1 1 0 010 2z"></path>
      <circle cx="225.799" cy="17" r="17" fill="#6c63ff"></circle>
      <path fill="#3f3d56" d="M284 83H1a1 1 0 010-2h283a1 1 0 010 2z"></path>
      <circle cx="67.799" cy="81" r="17" fill="#6c63ff"></circle>
      <path fill="#3f3d56" d="M284 147H1a1 1 0 010-2h283a1 1 0 010 2z"></path>
      <circle cx="134.799" cy="145" r="17" fill="#6c63ff"></circle>
      <path
        fill="#ffb8b8"
        d="M413.564 157.166a11.259 11.259 0 01.936 1.506l52.707 5.926 7.665-10.356 17.143 9.525-15.09 25.158-64.573-16.947a11.225 11.225 0 111.212-14.812z"
      ></path>
      <path
        fill="#6c63ff"
        d="M488.27 172.777a4.827 4.827 0 01-1.175-.732L465.912 154.2a4.812 4.812 0 01-.31-7.077l19.223-19.302a4.787 4.787 0 016.238-.496l14.536 10.556a4.815 4.815 0 011.523 5.95l-12.575 26.59a4.817 4.817 0 01-6.278 2.356z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M570.892 425.157L558.24 428.599 538.942 381.438 557.614 376.358 570.892 425.157z"
      ></path>
      <path
        fill="#2f2e41"
        d="M547.222 427.712l25.398-6.91 4.18 15.362-39.763 10.819-.271-.998a14.887 14.887 0 0110.456-18.273z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M462.735 434.811L449.624 434.81 443.386 384.237 462.738 384.238 462.735 434.811z"
      ></path>
      <path
        fill="#2f2e41"
        d="M439.224 431.064h26.32v15.921h-41.207v-1.034a14.887 14.887 0 0114.887-14.887z"
      ></path>
      <circle
        cx="710.087"
        cy="300.062"
        r="26.267"
        fill="#ffb8b8"
        transform="rotate(-45 324.17 462.085)"
      ></circle>
      <path
        fill="#2f2e41"
        d="M461.932 398.752h-17.917a4.827 4.827 0 01-4.808-4.516c-5.34-84.875-2.216-145.758 9.828-191.6a5.002 5.002 0 01.195-.59l.96-2.399a4.79 4.79 0 014.468-3.026h36.846a4.805 4.805 0 013.654 1.68l5.005 5.84c.097.114.189.23.277.352 22.567 31.47 42.79 92.995 66.213 175.692a4.797 4.797 0 01-3.164 5.9l-19.255 6.162a4.839 4.839 0 01-5.802-2.494l-49.97-103.64a3.743 3.743 0 00-7.08 1.118l-14.681 107.36a4.831 4.831 0 01-4.769 4.161z"
      ></path>
      <path
        fill="#6c63ff"
        d="M498.143 204.568c-.05 0-.1 0-.151-.002l-44.756-1.413a4.797 4.797 0 01-4.63-4.229c-5.673-45.925 9.887-58.228 16.84-61.385a3.7 3.7 0 002.152-2.934l.601-4.814a4.795 4.795 0 01.951-2.337c10.902-14.122 25.788-18.645 33.692-20.083a4.805 4.805 0 015.616 4.117l.901 6.912a3.808 3.808 0 00.763 1.809c22.736 29.723-2.593 73.609-7.901 82.104a4.822 4.822 0 01-4.078 2.255z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M493.968 269.844a11.49 11.49 0 001.504-17.553l8.314-100.393-24.752 3.405-.471 97.541a11.551 11.551 0 0015.405 17z"
      ></path>
      <path
        fill="#6c63ff"
        d="M505.403 166.354a4.827 4.827 0 01-1.37-.198l-26.571-7.816a4.812 4.812 0 01-3.13-6.354l9.833-25.404a4.787 4.787 0 015.51-2.964l17.556 3.816a4.815 4.815 0 013.788 4.836l-.816 29.402a4.817 4.817 0 01-4.8 4.682z"
      ></path>
      <path
        fill="#3f3d56"
        d="M727.016 449h-381a1 1 0 010-2h381a1 1 0 010 2z"
      ></path>
      <path
        fill="#2f2e41"
        d="M511.388 58.296a108.933 108.933 0 01-4.305-18.145c-.287-3.587.632-7.446 3.244-9.92 4.888-4.631 13.193-2.426 18.304 1.957 7.388 6.335 11.073 16.069 12.465 25.7s.78 19.426 1.115 29.151 1.726 19.726 6.685 28.1 14.16 14.8 23.864 14.088a16.795 16.795 0 0010.514-4.455 12.19 12.19 0 003.662-10.586c4.96 8.882 2.445 20.92-4.954 27.903s-18.78 8.957-28.507 5.976-17.732-10.457-22.514-19.437-6.535-19.353-6.28-29.524c.194-7.81 1.522-15.684.202-23.384s-6.139-15.519-13.738-17.332z"
      ></path>
      <path
        fill="#2f2e41"
        d="M477.261 68.42c-1.295 4.328-6.251 6.997-10.71 6.265s-8.123-4.403-9.478-8.713a17.938 17.938 0 011.402-13.15 20.479 20.479 0 0111.717-10.438 16.814 16.814 0 0115.289 2.443 5.623 5.623 0 013.93-4.109 10.745 10.745 0 015.896.087 24.296 24.296 0 0113.522 9.837 39.535 39.535 0 016.129 15.798c1.509 8.469.952 17.723-3.804 24.89s-14.487 11.4-22.381 7.983c-.492-2.517.674-5.05 2.023-7.231s2.948-4.305 3.466-6.816-.475-5.583-2.904-6.404c-2.073-.7-4.282.434-6.465.571a7.084 7.084 0 01-6.796-10.207z"
      ></path>
    </svg>
    );
  }
}
