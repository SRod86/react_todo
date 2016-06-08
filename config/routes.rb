Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'restaurant_list', to: 'restaurant_list#index'
end
