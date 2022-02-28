<template>
        <div class="popup" v-show="value">
    <transition name="popup">
            <div class="popup-wrapper" v-click-outside="closePopup">
                <div class="text-left popup-content">                    
                    <div class="close-wrapper mb-4 flex justify-between items-center">
                        <h1 class="title">{{ title }}</h1>
                        <FontAwesomeIcon icon="times" class="cursor-pointer close-icon" @click="closePopup"/>
                    </div>
                    <p class="message">{{ message }}</p>
                </div>
                <div class="popup-action mt-6 flex justify-end">
                    <BaseButton
                        @click.native="closePopup"
                        class="action-confirm cursor-pointer px-4 py-3"
                    >{{ leftButton }}
                    </BaseButton>
                    <BaseButton
                        @click.native="acceptPopup"
                        class="action-confirm cursor-pointer bg-blue-400 px-4 py-3 text-white font-bold rounded-md"
                    >{{ rightButton }}
                    </BaseButton>
                </div>
            </div>
    </transition>
        </div>
</template>

<script>
export default {
    name: 'ProcessingPopup',

    props: {
        value: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: 'Confirm Data',
        },
        message: {
            type: String,
            default: `Dengan klik "Ya Lanjutkan" Anda mengkonfirmasi bahwa data Anda
sudah tercatat dengan benar. Yakin untuk melanjutkan?`,
        },
        leftButton: {
            type: String,
            default: 'Periksa Kembali'
        },
        rightButton: {
            type: String,
            default: 'Ya Lanjutkan'
        },

    },
    methods: {
        acceptPopup() {
            this.$emit('accept')
            this.$emit('input', false)
        },
        closePopup() {
            this.$emit('input', false)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@assets/vue-file-manager/_variables';
@import '@assets/vue-file-manager/_mixins';

.spinner-wrapper {
    padding-bottom: 90px;
    position: relative;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    overflow: auto;
    height: 100%;
    background-color: rgba(1, 1,1, .4);
}

.popup-wrapper {
    z-index: 12;
    position: absolute;
    left: 0;
    right: 0;
    max-width: 480px;
    top: 50%;
    transform: translateY(-50%) scale(1);
    margin: 0 auto;
    padding: 20px;
    box-shadow: $light_mode_popup_shadow;
    border-radius: 8px;
    text-align: center;
    background: white;
}
.popup-action {
    gap: 40px;
}
.popup-content {

    .title {
        @include font-size(22);
        font-weight: 700;
        color: $text;
    }

    .message {
        @include font-size(16);
        color: #333;
        margin-top: 5px;
    }
}

@media only screen and (max-width: 690px) {
    .popup-wrapper {
        padding: 20px;
        left: 15px;
        right: 15px;
    }

    .popup-content {

        .title {
            @include font-size(19);
        }

        .message {
            @include font-size(15);
        }
    }
}

@media (prefers-color-scheme: dark) {
    .popup-wrapper {
        background: $dark_mode_background;
    }
    .popup-content {
        .title {
            color: $dark_mode_text_primary;
        }

        .message {
            color: $dark_mode_text_secondary;
        }
    }
}

// Animations
.popup-enter-active {
    animation: popup-in 0.35s 0.15s ease both;
}

.popup-leave-active {
    animation: popup-in 0.15s ease reverse;
}

@keyframes popup-in {
    0% {
        opacity: 0;
        transform: scale(0.7);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
