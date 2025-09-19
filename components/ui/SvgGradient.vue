<template>
    <svg class="background-glow" width="1128" height="940" viewBox="0 0 1128 940" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4" filter="url(#filter1_f_26532_1458)">
            <path
                d="M673.47 216.667L689.984 436.046L655.759 540.911L485.295 567.783L413.003 406.755L297.588 445.528L184.059 269.554L174 135.932L452.567 133.013L523.099 244.032L673.47 216.667Z"
                fill="#00D5BE" />
        </g>
        <defs>
            <filter id="filter1_f_26532_1458" x="0" y="-40.987" width="863.984" height="782.77"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="87" />
            </filter>
        </defs>
    </svg>

    <svg class="foreground-glow" width="1128" height="940" viewBox="0 0 1128 940" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4" filter="url(#filter0_f_26532_1458)">
            <path
                d="M723.946 813.705L510.032 762.318L420.663 697.654L447.226 527.142L622.649 507.576L621.041 385.833L823.309 331.577L953.602 362.876L871.165 628.982L743.892 662.172L723.946 813.705Z"
                fill="none" />
        </g>
        <defs>
            <filter id="filter0_f_26532_1458" x="246.663" y="157.577" width="880.939" height="830.128"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="87" />
            </filter>
        </defs>
    </svg>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.background-glow,
.foreground-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
}

.foreground-glow path {
    fill: var(--primitive-indigo-500);
}
</style>
