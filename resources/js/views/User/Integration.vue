<template>
    <PageTab>
        <PageTabGroup>
            <ValidationObserver ref="password" @submit.prevent="resetPassword" v-slot="{ }" tag="form" class="form block-form">
                <FormLabel>{{ $t('Integration Setup') }}</FormLabel>
                <div class="block-wrapper">
                    <label>{{ $t('Token') }}:</label>
                    <SwitchInput class="switch" :state="0"/>
                </div>
                <div class="block-wrapper">
                    <ButtonBase type="submit" button-style="theme" class="confirm-form">
                        {{ $t('Save Integration') }}
                    </ButtonBase>
                </div>
            </ValidationObserver>
        </PageTabGroup>
    </PageTab>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate/dist/vee-validate.full'
    import PageTabGroup from '@/components/Others/Layout/PageTabGroup'
    import UserImageInput from '@/components/Others/UserImageInput'
    import FormLabel from '@/components/Others/Forms/FormLabel'
    import MobileHeader from '@/components/Mobile/MobileHeader'
    import ButtonBase from '@/components/FilesView/ButtonBase'
    import SwitchInput from '@/components/Others/Forms/SwitchInput'
    import PageTab from '@/components/Others/Layout/PageTab'
    import PageHeader from '@/components/Others/PageHeader'
    import ThemeLabel from '@/components/Others/ThemeLabel'
    import {required} from 'vee-validate/dist/rules'
    import {events} from '@/bus'
    import axios from 'axios'

    export default {
        name: 'Integration',
        components: {
            PageTabGroup,
            FormLabel,
            PageTab,
            ValidationProvider,
            ValidationObserver,
            UserImageInput,
            MobileHeader,
            PageHeader,
            ButtonBase,
            ThemeLabel,
            required,
            SwitchInput,
        },
        data() {
            return {
                newPasswordConfirmation: '',
                newPassword: '',
                isLoading: false,
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';
    @import '@assets/vue-file-manager/_forms';

    .block-form {
        max-width: 100%;
    }

    @media only screen and (max-width: 960px) {

        .form {
            .button-base {
                width: 100%;
                margin-top: 0;
                text-align: center;
            }
        }
    }

    @media (prefers-color-scheme: dark) {

    }

</style>
