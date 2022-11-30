<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';

const props = defineProps(['products_by_stock', 'products_by_sale']);


</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
            </div>
            <div class="grid gap-4 grid-cols-2 max-w-7xl mx-auto lg:px-8">
                <div class="border border-gray-300 mb-5 rounded-lg shadow-lg bg-white p-4">
                    <h1 class="text-xl mb-2">
                        <svg style="display: inline"  class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Ranking stock de productos
                    </h1>
                    <hr class="mb-2">
                    <div class="div-invoice">
                        <div class="w-full">
                            <div v-for="product in products_by_stock" :key="product.id" class="mb-4">
                                {{ product.name }}
                                <div class="w-full bg-gray-200 rounded-full">
                                    <div class="bg-orange-400 text-xs font-medium text-gray-800 text-center p-0.5 leading-none rounded-l-full" :style="'width:' + product.stock + '%'">
                                        <strong>{{ product.stock }}%</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border border-gray-300 mb-5 rounded-lg shadow-lg bg-white p-4">
                    <h1 class="text-xl mb-2">
                        <svg style="display: inline"  class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        Ranking productos más vendidos
                    </h1>
                    <hr class="mb-2">
                    <div class="div-invoice">
                        <div class="w-full">
                            <div v-for="product in products_by_sale" :key="product.id" class="mb-4">
                                {{ product.product_name }}
                                <div class="w-full bg-gray-200 rounded-full">
                                    <div class="bg-indigo-400 text-xs font-medium text-gray-700 text-center p-0.5 leading-none rounded-l-full" :style="'width:' + product.quantity + '%'">
                                        <strong>{{ product.quantity }}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
