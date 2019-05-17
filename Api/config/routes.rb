Rails.application.routes.draw do
  scope :api do
    resources :products, only: [:index, :show]
  end
end
