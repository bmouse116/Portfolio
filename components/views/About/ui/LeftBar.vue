<template>
    <div class="left-bar">
        <div class="icons">
            <div class="icon"><svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM10 12V14H16V12H10ZM6.414 9L3.586 11.828L5 13.243L9.243 9L5 4.757L3.586 6.172L6.414 9Z"
                        fill="#62748E" />
                </svg>
            </div>
            <div class="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_28555_1317)">
                        <path
                            d="M5 20H19V22H5V20ZM12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18Z"
                            fill="#62748E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_28555_1317">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="icon"><svg width="22" height="16" viewBox="0 0 22 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 0C17.5913 0 19.1174 0.632141 20.2426 1.75736C21.3679 2.88258 22 4.4087 22 6V10C22 11.5913 21.3679 13.1174 20.2426 14.2426C19.1174 15.3679 17.5913 16 16 16H6C4.4087 16 2.88258 15.3679 1.75736 14.2426C0.632141 13.1174 0 11.5913 0 10V6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0H16ZM9 5H7V7H5V9H6.999L7 11H9L8.999 9H11V7H9V5ZM17 9H15V11H17V9ZM15 5H13V7H15V5Z"
                        fill="#62748E" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.left-bar {
    width: 66px;
    border-right: 1px solid var(--theme-theme-stroke);
    padding: 12px 24px 12px 20px;
    height: 100%;

    .icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;

        .icon {
            svg path {
                transition: all 0.3s ease;
                cursor: pointer;

                &:hover {
                    fill: var(--primary-background);
                }
            }
        }
    }
}
</style>
