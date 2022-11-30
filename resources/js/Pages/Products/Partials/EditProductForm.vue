<script setup>
import {useForm} from "@inertiajs/inertia-vue3";
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

const props = defineProps(['product']);
const form = useForm(props.product);

const updateProduct = (product, $emit) => {
    form.put(route('products.update', product.id), {
        preserveScroll: true,
        onSuccess: () => {
           $emit('product-updated')
        },
        onError: () => {
            alert('Error actualizando el producto!');
        }
    })
}

</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Producto <strong>{{product.name}}</strong></h2>

            <p class="mt-1 text-sm text-gray-600">
                Edite los valores del producto!
            </p>
        </header>

        <form @submit.prevent="updateProduct(product, $emit)" class="mt-6 space-y-6">
            <div>
                <InputLabel for="name_edit" value="Nombre"/>

                <TextInput
                    id="name_edit"
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
                <InputLabel for="reference_edit" value="Referencia"/>

                <TextInput
                    id="reference_edit"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.reference"
                    required
                />

                <InputError class="mt-2" :message="form.errors.reference"/>
            </div>

            <div>
                <InputLabel for="price_edit" value="Precio"/>

                <TextInput
                    id="price_edit"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.price"
                    required
                />

                <InputError class="mt-2" :message="form.errors.price"/>
            </div>

            <div>
                <InputLabel for="weight_edit" value="Peso"/>

                <TextInput
                    id="weight_edit"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.weight"
                    required
                />

                <InputError class="mt-2" :message="form.errors.weight"/>
            </div>

            <div>
                <InputLabel for="category_edit" value="Categoría"/>

                <TextInput
                    id="category_edit"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.category"
                    required
                />

                <InputError class="mt-2" :message="form.errors.category"/>
            </div>

            <div>
                <InputLabel for="stock_edit" value="Stock"/>

                <TextInput
                    id="stock_edit"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.stock"
                    required
                />

                <InputError class="mt-2" :message="form.errors.stock"/>
            </div>

            <div class="flex items-center gap-4 border-t pt-5">
                <SecondaryButton @click="$emit('cancel-edit')" ref="btn-cancel">Cancelar</SecondaryButton>

                <PrimaryButton :disabled="form.processing" class="float-right">Guardar</PrimaryButton>
                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Guardando...</p>
                </Transition>
            </div>
        </form>
    </section>
</template>

<style scoped>

</style>
