import {INodeProperties,} from 'n8n-workflow';

export const refundsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		required: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['refunds'],
			},
		},
		default: 'get',
		description: 'The operation to perform.',
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a refund for a payment',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve single payment refund',
			},
			{
				name: 'Cancel',
				value: 'cancel',
				description: 'Cancel a payment refund',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Retrieve list of all refunds',
			},
			{
				name: 'List refund of payment',
				value: 'listPayment',
				description: 'Retrieve list of refunds of a specific payment',
			},
		],
	},
];

export const refundsFields: INodeProperties[] = [
	/*-------------------------------------------------------------------------- */
	/*                                refunds:create                            */
	/* ------------------------------------------------------------------------- */
	{
		displayName: 'Payment ID',
		name: 'paymentID',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Currency',
		name: 'currency',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		required: true,
		type: 'string',
		description: 'Make sure to send 2 decimals and omit the thousands separator, e.g. \'currency\':\'EUR\', \'value\':\'1000.00\' if you would want to charge €1000.00.',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['create'],
			},
		},
	},
	/*-------------------------------------------------------------------------- */
	/*                                refunds:cancel                            */
	/* ------------------------------------------------------------------------- */
	{
		displayName: 'Payment ID',
		name: 'paymentID',
		required: true,
		type: 'string',
		default: '',
			displayOptions: {
				show: {
					resource: ['refunds'],
					operation: ['cancel'],
				},
			},
		},
	{
		displayName: 'Refund ID',
		name: 'refundID',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['cancel'],
			},
		},
	},
	/*-------------------------------------------------------------------------- */
	/*                              refunds:list Payment Refunds	               */
	/* ------------------------------------------------------------------------- */
	{
		displayName: 'Payment ID',
		name: 'paymentID',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['listPayment'],
			},
		},
	},

	/*-------------------------------------------------------------------------- */
	/*                                refunds:list                              */
	/* ------------------------------------------------------------------------- */
	{
		displayName: 'Additional Parameters',
		name: 'additionalParameters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['list'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 250,
			},
		],
	},

	/*-------------------------------------------------------------------------- */
	/*                                refunds:get                            		 */
	/* ------------------------------------------------------------------------- */
	{
		displayName: 'Payment ID',
		name: 'paymentID',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Refund ID',
		name: 'refundID',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['refunds'],
				operation: ['get'],
			},
		},
	},

];
