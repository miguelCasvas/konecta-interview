<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import CreateProductForm from './Partials/CreateProductForm.vue';
import ProductsTable from './Partials/ProductsTable.vue';

defineProps(['products']);

</script>

<template>
    <Head title="Products"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Productos</h2>
        </template>

        <div class="py-12">
            <div class="flex max-w-7xl lg:px-8 mx-auto">
                <div class="flex-auto w-15 bg-white shadow p-4 sm:p-8 sm:rounded-lg">
                    <CreateProductForm/>
                </div>
                <div class="flex-auto w-70 ml-5 bg-white shadow p-4 sm:p-8 sm:rounded-lg overflow-x-auto relative">
                    <ProductsTable :products="products"/>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>
