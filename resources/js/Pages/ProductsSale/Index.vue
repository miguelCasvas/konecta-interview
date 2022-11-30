<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import {ref} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";

const props = defineProps(['products']);
const invoiceProducts = ref([]);
const form = useForm({
    invoice: invoiceProducts,
    invoiceSerial: Math.floor(Date.now() / 1000)
});

const sendInvoice = () => {
    form.post(route('sales.store'), {
        preserveScroll: true,
        onSuccess: () => {
            invoiceProducts.value = [];
        },
        onError: (error) => {
            console.log(error);
            const message = error.message ? error.message : 'Error generando la factura!';
            alert(message);
        }
    })
}

const searchProduct = (product) => {
    let invoiceProdKey = null;
    let invoiceProd = invoiceProducts.value.find((subProduct, key) => {
        invoiceProdKey = key;
        return subProduct.productId === product.id;
    });

    return {
        element: invoiceProd,
        key: invoiceProdKey
    }
}

const addProduct = (product) => {
    const productSearched = searchProduct(product);
    let invoiceProdKey = productSearched.key;
    let invoiceProd = productSearched.element;

    if (product.stock < 1) {
        return null;
    }

    if (!invoiceProd) {
        invoiceProd = {
            productId: product.id,
            productName: product.name,
            productPrice: product.price,
            quantity: 1
        };

        invoiceProducts.value.push(invoiceProd)
    } else {
        invoiceProd.quantity++;
        invoiceProducts.value[invoiceProdKey] = invoiceProd;
    }

    product.stock--;
}

const removeProduct = (product) => {
    const productSearched = searchProduct(product);
    let invoiceProdKey = productSearched.key;
    let invoiceProd = productSearched.element;

    if (invoiceProdKey == null) {
        return null;
    }

    invoiceProd.quantity--;

    if (invoiceProd.quantity < 1) {
        invoiceProducts.value.splice(invoiceProdKey, 1);
    } else {
        invoiceProducts.value[invoiceProdKey] = invoiceProd;
    }

    product.stock++;
}

</script>

<template>
    <Head title="Products"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Ventas</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl lg:px-8 mx-auto">
                <div class="border border-gray-300 mb-5 rounded-lg shadow-lg bg-white p-4">
                    <h1 class="text-xl mb-2">
                        <svg style="display: inline" class="w-7 h-7" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Factura <small class="text-gray-400">#{{form.invoiceSerial}}</small>

                        <div class="float-right">
                            <form @submit.prevent="sendInvoice()">
                                <PrimaryButton>Confirmar</PrimaryButton>

                                <Transition
                                    enter-from-class="opacity-0" leave-to-class="opacity-0"
                                    class="transition ease-in-out"
                                >
                                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Guardando...</p>
                                </Transition>
                            </form>
                        </div>
                    </h1>
                    <hr class="mb-2">
                    <div class="div-invoice">
                        <table class="w-full">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">Descripción</th>
                                <th scope="col" class="py-3 px-6">Precio</th>
                                <th scope="col" class="py-3 px-6">Cantidad</th>
                                <th scope="col" class="py-3 px-6">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                v-for="product in invoiceProducts"
                            >
                                <td class="">
                                    <svg class="w-3 h-3 text-orange-400" fill="none" style="display: inline"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                    </svg>
                                    {{ product.productName }}
                                </td>
                                <td align="center">${{ product.productPrice }}</td>
                                <td align="center">{{ product.quantity }}</td>
                                <td align="center">${{ (product.productPrice * product.quantity) }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="max-w-7xl lg:px-6 mx-auto">
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="product in products" :key="product.id" class="flex justify-center">
                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                                <strong class="text-orange-400">{{ product.name }}</strong> / {{ product.category }}

                                <!-- button minus -->
                                <button type="button" @click="removeProduct(product)"
                                        class="btn-add-product inline-block px-6 py-2 border-2 border-gray-300 text-gray-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M20 12H4"></path>
                                    </svg>
                                </button>

                                <!-- button plus -->
                                <button type="button" @click="addProduct(product)"
                                        class="btn-add-product mr-1 inline-block px-6 py-2 border-2 border-orange-300 text-orange-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                            </h5>
                            <hr>
                            <div class="text-gray-700 text-base mb-4">
                                <table class="product_detail">
                                    <tr>
                                        <th>Referencia</th>
                                        <td>{{ product.reference }}</td>
                                    </tr>
                                    <tr>
                                        <th>Precio</th>
                                        <td>${{ product.price }}</td>
                                    </tr>
                                    <tr>
                                        <th>Peso</th>
                                        <td>{{ product.weight }}<small>gr.</small></td>
                                    </tr>
                                </table>
                            </div>

                            <div class="w-full text-right">
                                <span
                                    class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded-full">
                                    Cant. {{ product.stock }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.product_detail {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 330px !important;
}

.product_detail th {
    text-align: left !important;
}

.product_detail th::after {
    content: ":";
}

.btn-add-product {
    float: right;
    width: 35px;
    padding: 3px;
}

.div-invoice {
    min-height: 200px;
    max-height: 200px;
    overflow-y: auto;
}
</style>
