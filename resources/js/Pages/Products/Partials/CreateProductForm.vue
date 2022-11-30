<script setup>

import {useForm} from "@inertiajs/inertia-vue3";
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    name: null,
    reference: null,
    price: null,
    weight: null,
    category: null,
    stock: null,
});

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Creación</h2>

            <p class="mt-1 text-sm text-gray-600">
                Ingrese un producto valido al sistema!
            </p>
        </header>

        <form
            @submit.prevent="form.post(route('products.store'), { onSuccess: () => form.reset() })"
            class="mt-6 space-y-6"
        >
            <div>
                <InputLabel for="name" value="Nombre"/>

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name"/>
            </div>

            <div>
                <InputLabel for="reference" value="Referencia"/>

                <TextInput
                    id="reference"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.reference"
                    required
                />

                <InputError class="mt-2" :message="form.errors.reference"/>
            </div>

            <div>
                <InputLabel for="price" value="Precio"/>

                <TextInput
                    id="weight"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.price"
                    required
                />

                <InputError class="mt-2" :message="form.errors.price"/>
            </div>

            <div>
                <InputLabel for="weight" value="Peso"/>

                <TextInput
                    id="weight"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.weight"
                    required
                />

                <InputError class="mt-2" :message="form.errors.weight"/>
            </div>

            <div>
                <InputLabel for="category" value="Categoría"/>

                <TextInput
                    id="category"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.category"
                    required
                />

                <InputError class="mt-2" :message="form.errors.category"/>
            </div>

            <div>
                <InputLabel for="stock" value="Stock"/>

                <TextInput
                    id="stock"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.stock"
                    required
                />

                <InputError class="mt-2" :message="form.errors.stock"/>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Guardar</PrimaryButton>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Guardando...</p>
                </Transition>
            </div>
        </form>
    </section>
</template>

<style scoped>

</style>
